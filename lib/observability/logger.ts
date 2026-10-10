import "server-only";

import pino from "pino";

import { serverEnv } from "@/lib/env/server";

export const logger = pino({
  base: {
    environment: serverEnv.NODE_ENV,
    service: "proofline",
  },
  level: serverEnv.LOG_LEVEL,
  redact: {
    paths: [
      "authorization",
      "headers.authorization",
      "headers.cookie",
      "PANTA_API_KEY",
      "pantaApiKey",
      "token",
      "*.token",
    ],
    censor: "[REDACTED]",
  },
});
