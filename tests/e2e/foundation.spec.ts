import { expect, test } from "@playwright/test";

test("shows the Phase 0 boundary", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: "The forecast layer for the internet." }),
  ).toBeVisible();
  await expect(
    page.getByText("No live markets or credentials are configured"),
  ).toBeVisible();
});

test("reports application health", async ({ request }) => {
  const response = await request.get("/api/health");

  expect(response.ok()).toBe(true);
  await expect(response.json()).resolves.toMatchObject({
    service: "proofline",
    status: "ok",
  });
  expect(response.headers()["x-request-id"]).toBeTruthy();
});
