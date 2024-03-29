import { expect } from "@playwright/test";
import { test } from "@fixtures/basePage";

let pageTitle;
let faker = require("faker"); //randomizes fields to create new account

test.beforeEach(async ({ page, context }) => {
  // Opens the URL defined in home.page before each test
  const url =
    "https://magento.softwaretestingboard.com/customer/account/create/";
  await context.clearCookies();
  await page.goto(url);
});

test("Title of home page", async ({ utils }) => {
  // Expects page to have a title with the name of "Create New Customer Account".
  pageTitle = await utils.getTitle();
  await expect(pageTitle).toBe("Create New Customer Account");
});

test.describe("Create New Customer Account Page", () => {
  test("Create New Customer Account Page", async ({ createNewAccount }) => {
    await createNewAccount.assertCreateNewAccountSection();
  });

  test("Create New Customer Account and Assert", async ({
    createNewAccount,
  }) => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();
    const password = faker.internet.password();

    await createNewAccount.createNewAccount(
      firstName,
      lastName,
      email,
      password
    );

    await createNewAccount.assertCreateNewAccountSuccess();
  });
});
