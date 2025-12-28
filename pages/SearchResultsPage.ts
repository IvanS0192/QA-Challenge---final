import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

/**
 * SearchResultsPage
 * ----------------------------------------------
 * Handles what happens after a search:
 * - Waits for results or a "no results" message
 * - Opens the first product
 * - Verifies search term appears in results
 */
export class SearchResultsPage extends BasePage {
  readonly productList = this.page.locator(".product_list");
  readonly noResultsMessage = this.page.locator(".alert-warning");
  readonly productNames = this.page.locator(".product_list .product-container a.product-name");

  /**  Wait for search results or no-results message to appear */
  async waitForResults() {
    await expect(this.productList.or(this.noResultsMessage)).toBeVisible();
  }

  /**  Get how many products are visible */
  async getResultCount(): Promise<number> {
    await this.waitForResults();
    return await this.productNames.count();
  }

  /** Open the first product in the search results */
  async openFirstProduct() {
    await this.waitForResults();
    const count = await this.productNames.count();

    if (count === 0) {
      console.log(" No products found in search results.");
      return;
    }

    await this.productNames.first().click();
    await this.page.waitForLoadState("networkidle");
    console.log("Opened the first product in results.");
  }

  /**  Verify that results contain the search term */
  async verifyResultsContain(searchTerm: string) {
    const count = await this.productNames.count();

    if (count === 0) {
      console.log(" No products to verify.");
      return;
    }

    const firstProductName = (await this.productNames.first().textContent())?.toLowerCase() || "";
    expect(firstProductName).toContain(searchTerm.toLowerCase());
    console.log(` Search results contain the term: "${searchTerm}".`);
  }

  /**  Verify that 'no results' message appears for invalid searches */
  async verifyNoResultsMessage() {
    await expect(this.noResultsMessage).toBeVisible();
    const text = (await this.noResultsMessage.textContent())?.trim() || "";
    expect(text.toLowerCase()).toContain("no results");
    console.log("Verified: 'No results' message is displayed.");
  }
}
