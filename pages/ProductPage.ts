import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

/**
 *  ProductPage 
 * ----------------------------------------
 * - Reading the product name
 * - Checking if a product is out of stock
 * - Verifying the "out of stock" message
 * - Ensuring Add to Cart button is hidden when out of stock
 */
export class ProductPage extends BasePage {
  readonly addToCartButton = this.page.locator("button[name='Submit']").first();
  readonly outOfStockMessage = this.page.locator("#availability_value");
  readonly productName = this.page.locator("h1[itemprop='name']");

  /**  Get the product name */
  async getProductName(): Promise<string> {
    await this.productName.waitFor({ state: "visible" });
    return (await this.productName.textContent())?.trim() || "";
    console.log(this.getProductName);
  }

  /**  Check if the product is out of stock */
  async isOutOfStock(): Promise<boolean> {
    if (await this.outOfStockMessage.isVisible()) {
      const text = (await this.outOfStockMessage.textContent())?.toLowerCase() || "";
      return text.includes("out of stock") || text.includes("no longer in stock");
    }
    return false;
  }

  /**  Verify "Out of stock" message appears */
  async verifyOutOfStockMessage() {
    await expect(this.outOfStockMessage).toBeVisible();
    const text = (await this.outOfStockMessage.textContent())?.toLowerCase() || "";
    expect(text).toMatch(/out of stock|no longer in stock/);
    console.log("Out of stock message verified.");
  }

  /**  Confirm Add to Cart button is not available */
  async verifyAddToCartHidden() {
    const visible = await this.addToCartButton.isVisible().catch(() => false);
    expect(visible).toBeFalsy();
    console.log(" Add to Cart button is hidden as expected.");
  }
}

