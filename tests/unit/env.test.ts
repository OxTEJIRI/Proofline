import { describe, expect, it } from "vitest";

import { parseServerEnv } from "../../lib/env/schema";

describe("server environment", () => {
  it("uses safe local defaults without credentials", () => {
    expect(parseServerEnv({})).toMatchObject({
      APP_BASE_URL: "http://localhost:3000",
      LOG_LEVEL: "info",
      NODE_ENV: "development",
    });
  });

  it("accepts Panta configuration only as a complete pair", () => {
    expect(() =>
      parseServerEnv({ PANTA_API_BASE_URL: "https://example.invalid" }),
    ).toThrow("PANTA_API_KEY");
    expect(() => parseServerEnv({ PANTA_API_KEY: "placeholder" })).toThrow(
      "PANTA_API_BASE_URL",
    );
  });

  it("treats blank optional values from .env files as unset", () => {
    expect(
      parseServerEnv({ PANTA_API_BASE_URL: "", PANTA_API_KEY: "" }),
    ).toMatchObject({
      PANTA_API_BASE_URL: undefined,
      PANTA_API_KEY: undefined,
    });
  });
});
