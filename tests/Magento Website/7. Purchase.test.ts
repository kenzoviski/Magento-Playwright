import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page, context }) => {
  // Opens the URL defined in playwright.config.ts before each test
  await page.goto("/");
});

test("X", async ({ page }) => {});
