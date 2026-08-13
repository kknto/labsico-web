import { createHash, timingSafeEqual } from "node:crypto";

export const INTERNAL_ACCESS_COOKIE = "labsico_internal_access";

const SESSION_SECRET = process.env.INTERNAL_ACCESS_SECRET ?? "labsico-internal-session";
const ACCESS_CODE = process.env.INTERNAL_ACCESS_CODE || "labsico-interno";

export function getInternalAccessToken() {
  return createHash("sha256").update(`${SESSION_SECRET}:${ACCESS_CODE}`).digest("hex");
}

export function verifyInternalAccessCode(value: string) {
  const expected = Buffer.from(ACCESS_CODE);
  const received = Buffer.from(value.trim());

  if (expected.length !== received.length) {
    return false;
  }

  return timingSafeEqual(expected, received);
}

export function verifyInternalAccessToken(value?: string) {
  if (!value) {
    return false;
  }

  const expected = Buffer.from(getInternalAccessToken());
  const received = Buffer.from(value);

  if (expected.length !== received.length) {
    return false;
  }

  return timingSafeEqual(expected, received);
}
