import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CartPage extends BasePage {
  readonly emptyCartMessage = this.page.locator("//p[@class='alert alert-warning']");
  readonly cartURL = "http://www.automationpractice.pl/index.php?controller=order";

  /** Navigate directly to the cart page */
  async openCart() {
    await this.page.goto(this.cartURL);
  }

  /** Verify the cart page loaded correctly */
  async verifyCartPageLoaded() {
    await expect(this.page).toHaveURL(this.cartURL);
  }

  /** Expect the empty cart message */
  async expectEmptyCartMessage() {
    await expect(this.emptyCartMessage).toBeVisible();
    await expect(this.emptyCartMessage).toHaveText("Your shopping cart is empty.");
  }
}