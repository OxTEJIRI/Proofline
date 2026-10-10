import { z } from "zod";

const optionalString = z.preprocess(
  (value) => (value === "" ? undefined : value),
  z.string().optional(),
);
const optionalUrl = z.preprocess(
  (value) => (value === "" ? undefined : value),
  z.string().url().optional(),
);

export const serverEnvSchema = z
  .object({
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
    APP_BASE_URL: z.string().url().default("http://localhost:3000"),
    LOG_LEVEL: z
      .enum(["trace", "debug", "info", "warn", "error", "fatal"])
      .default("info"),
    PANTA_API_BASE_URL: optionalUrl,
    PANTA_API_KEY: optionalString,
  })
  .superRefine((environment, context) => {
    const hasBaseUrl = Boolean(environment.PANTA_API_BASE_URL);
    const hasApiKey = Boolean(environment.PANTA_API_KEY);

    if (hasBaseUrl !== hasApiKey) {
      context.addIssue({
        code: "custom",
        message:
          "PANTA_API_BASE_URL and PANTA_API_KEY must be configured together.",
        path: hasBaseUrl ? ["PANTA_API_KEY"] : ["PANTA_API_BASE_URL"],
      });
    }
  });

export type ServerEnv = z.infer<typeof serverEnvSchema>;

export function parseServerEnv(
  environment: Record<string, string | undefined>,
): ServerEnv {
  const result = serverEnvSchema.safeParse(environment);

  if (!result.success) {
    const issues = result.error.issues.map(
      (issue) => `${issue.path.join(".")}: ${issue.message}`,
    );
    throw new Error(`Invalid server environment:\n${issues.join("\n")}`);
  }

  return result.data;
}
