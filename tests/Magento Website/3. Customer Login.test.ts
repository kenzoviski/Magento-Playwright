import { expect } from "@playwright/test";
import { test } from "@fixtures/basePage";

let pageTitle;

test.beforeEach(async ({ page, context }) => {
  const url =
    "https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jdXN0b21lci9hY2NvdW50L2xvZ2luLw%2C%2C/";
  await context.clearCookies();
  await page.goto(url);
});

test("Title of home page", async ({ utils, context }) => {
  // Expects page to have a title with the name of "Customer Login".
  pageTitle = await utils.getTitle();
  await expect(pageTitle).toBe("Customer Login");
});

test.describe("Customer Login Page", () => {
  test("Customer Login Section", async ({ customers }) => {
    await customers.assertCustomerLoginSection();
    await customers.assertNewCustomersSection();
  });

  test("Customer Login SignIn", async ({ customers }) => {
    await customers.signIn();
    await customers.assertSignedIn();
  });

  test("Forgot Your Password navigation", async ({ customers }) => {
    await customers.assertForgotYourPasswordNavigation();
  });
});
