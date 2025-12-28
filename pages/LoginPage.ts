import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  private emailInput = this.page.locator("#email");
  private passwordInput = this.page.locator("#passwd");
  private signInButton = this.page.locator("#SubmitLogin");

  // Only the login error box (not create account error)
  private loginErrorAlert = this.page.locator("#center_column .alert.alert-danger").first();

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.signInButton.click();
  }

  async expectErrorVisible() {
    await expect(this.loginErrorAlert).toBeVisible();
    await expect(this.loginErrorAlert).toContainText(/Authentication failed/i);
  }
}
