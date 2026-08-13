import { spawn } from "node:child_process";

if (process.env.NODE_TLS_REJECT_UNAUTHORIZED === "0" && (process.env.RENDER || process.env.NODE_ENV === "production")) {
  console.error("Refusing to start with NODE_TLS_REJECT_UNAUTHORIZED=0 in production.");
  process.exit(1);
}

const port = process.env.PORT || "10000";
const child = spawn("npx", ["next", "start", "-H", "0.0.0.0", "-p", port], {
  stdio: "inherit",
  shell: process.platform === "win32"
});

child.on("exit", (code) => {
  process.exit(code ?? 0);
});
