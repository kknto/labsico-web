import { createHmac, timingSafeEqual } from "node:crypto";

export const INTERNAL_ACCESS_COOKIE = "labsico_internal_access";

const DEV_ACCESS_CODE = "labsico-local";
const DEV_SESSION_SECRET = "local-development-secret-change-before-production";
const SESSION_MAX_AGE_SECONDS = 60 * 60 * 8;
const MIN_ACCESS_CODE_LENGTH = process.env.NODE_ENV === "production" ? 12 : 6;
const MIN_SESSION_SECRET_LENGTH = process.env.NODE_ENV === "production" ? 32 : 16;
const BLOCKED_PRODUCTION_CODES = new Set(["labsico-interno", "define-una-clave-local"]);

function getAccessCode() {
  return process.env.INTERNAL_ACCESS_CODE ?? (process.env.NODE_ENV === "development" ? DEV_ACCESS_CODE : "");
}

function getSessionSecret() {
  return process.env.INTERNAL_ACCESS_SECRET ?? (process.env.NODE_ENV === "development" ? DEV_SESSION_SECRET : "");
}

export function getInternalSessionMaxAge() {
  return SESSION_MAX_AGE_SECONDS;
}

export function isInternalAccessConfigured() {
  const accessCode = getAccessCode();
  const sessionSecret = getSessionSecret();

  if (process.env.NODE_ENV === "production" && BLOCKED_PRODUCTION_CODES.has(accessCode)) {
    return false;
  }

  return accessCode.length >= MIN_ACCESS_CODE_LENGTH && sessionSecret.length >= MIN_SESSION_SECRET_LENGTH;
}

function sign(value: string) {
  return createHmac("sha256", getSessionSecret()).update(value).digest("hex");
}

export function getInternalAccessToken(now = Date.now()) {
  const expiresAt = now + SESSION_MAX_AGE_SECONDS * 1000;
  const payload = Buffer.from(JSON.stringify({ exp: expiresAt })).toString("base64url");
  const signature = sign(payload);
  return `${payload}.${signature}`;
}

export function verifyInternalAccessCode(value: string) {
  const accessCode = getAccessCode();

  if (!accessCode || value.length > 256) {
    return false;
  }

  const expected = Buffer.from(accessCode);
  const received = Buffer.from(value.trim());

  if (expected.length !== received.length) {
    return false;
  }

  return timingSafeEqual(expected, received);
}

export function verifyInternalAccessToken(value?: string) {
  if (!value || !isInternalAccessConfigured()) {
    return false;
  }

  const [payload, signature] = value.split(".");
  if (!payload || !signature) {
    return false;
  }

  const expected = Buffer.from(sign(payload));
  const received = Buffer.from(signature);

  if (expected.length !== received.length) {
    return false;
  }

  if (!timingSafeEqual(expected, received)) {
    return false;
  }

  try {
    const decoded = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as { exp?: number };
    return typeof decoded.exp === "number" && decoded.exp > Date.now();
  } catch {
    return false;
  }
}
