import { NextResponse } from "next/server";
import {
  getInternalAccessToken,
  INTERNAL_ACCESS_COOKIE,
  verifyInternalAccessCode
} from "@/lib/internalAccess";

function shouldUseSecureCookie(request: Request) {
  const forwardedProto = request.headers.get("x-forwarded-proto");
  const requestProto = new URL(request.url).protocol.replace(":", "");
  return process.env.INTERNAL_COOKIE_SECURE === "true" || forwardedProto === "https" || requestProto === "https";
}

export async function POST(request: Request) {
  const payload = (await request.json()) as { code?: string };

  if (!payload.code || !verifyInternalAccessCode(payload.code)) {
    return NextResponse.json({ error: "Clave invalida." }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(INTERNAL_ACCESS_COOKIE, getInternalAccessToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: shouldUseSecureCookie(request),
    path: "/",
    maxAge: 60 * 60 * 8
  });

  return response;
}

export async function DELETE(request: Request) {
  const response = NextResponse.json({ ok: true });
  response.cookies.set(INTERNAL_ACCESS_COOKIE, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: shouldUseSecureCookie(request),
    path: "/",
    maxAge: 0
  });

  return response;
}
