import { serverEnv } from "@/lib/env/server";
import { logger } from "@/lib/observability/logger";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export function GET() {
  const requestId = crypto.randomUUID();

  logger.info(
    { requestId, operation: "health.read" },
    "Health check completed",
  );

  return Response.json(
    {
      environment: serverEnv.NODE_ENV,
      service: "proofline",
      status: "ok",
      timestamp: new Date().toISOString(),
    },
    {
      headers: {
        "Cache-Control": "no-store",
        "X-Request-Id": requestId,
      },
    },
  );
}
