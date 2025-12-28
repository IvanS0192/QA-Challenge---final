import { test, expect } from "@playwright/test";  // ← ADD expect here
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { users } from "../data/users";

test("Login - invalid credentials shows error", async ({ page }) => {
  const home = new HomePage(page);
  const login = new LoginPage(page);

  await home.open();
  await home.goToLogin();

  await login.login(users.invalid.email, users.invalid.password);
  await login.expectErrorVisible();
});


test("Login - valid credentials logs user in successfully", async ({ page }) => {
  const home = new HomePage(page);
  const login = new LoginPage(page);

  await home.open();
  await home.goToLogin();

  await login.login(users.valid.email, users.valid.password);

  await expect(page.locator('.account')).toBeVisible();
  await expect(page.locator('.logout')).toBeVisible();
  await expect(page).toHaveURL(/controller=my-account/);
});

