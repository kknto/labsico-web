import { NextResponse } from "next/server";
import {
  getInternalAccessToken,
  getInternalSessionMaxAge,
  INTERNAL_ACCESS_COOKIE,
  isInternalAccessConfigured,
  verifyInternalAccessCode
} from "@/lib/internalAccess";

const WINDOW_MS = 15 * 60 * 1000;
const MAX_ATTEMPTS = 8;
const attempts = new Map<string, { count: number; resetAt: number }>();

function shouldUseSecureCookie(request: Request) {
  const forwardedProto = request.headers.get("x-forwarded-proto");
  const requestProto = new URL(request.url).protocol.replace(":", "");
  return process.env.INTERNAL_COOKIE_SECURE === "true" || forwardedProto === "https" || requestProto === "https";
}

function getClientKey(request: Request) {
  return (
    request.headers.get("cf-connecting-ip") ??
    request.headers.get("x-real-ip") ??
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown"
  );
}

function isRateLimited(clientKey: string) {
  const now = Date.now();
  const current = attempts.get(clientKey);

  if (!current || current.resetAt <= now) {
    attempts.set(clientKey, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  current.count += 1;
  return current.count > MAX_ATTEMPTS;
}

async function readPayload(request: Request) {
  try {
    return (await request.json()) as { code?: string };
  } catch {
    return {};
  }
}

export async function POST(request: Request) {
  if (!isInternalAccessConfigured()) {
    return NextResponse.json({ error: "Acceso no configurado." }, { status: 503 });
  }

  const clientKey = getClientKey(request);
  if (isRateLimited(clientKey)) {
    return NextResponse.json({ error: "Demasiados intentos. Intenta mas tarde." }, { status: 429 });
  }

  const payload = await readPayload(request);

  if (!payload.code || !verifyInternalAccessCode(payload.code)) {
    return NextResponse.json({ error: "Acceso no autorizado." }, { status: 401 });
  }

  attempts.delete(clientKey);

  const response = NextResponse.json({ ok: true });
  response.cookies.set(INTERNAL_ACCESS_COOKIE, getInternalAccessToken(), {
    httpOnly: true,
    sameSite: "strict",
    secure: shouldUseSecureCookie(request),
    path: "/",
    maxAge: getInternalSessionMaxAge()
  });

  return response;
}

export async function DELETE(request: Request) {
  const response = NextResponse.json({ ok: true });
  response.cookies.set(INTERNAL_ACCESS_COOKIE, "", {
    httpOnly: true,
    sameSite: "strict",
    secure: shouldUseSecureCookie(request),
    path: "/",
    maxAge: 0
  });

  return response;
}
