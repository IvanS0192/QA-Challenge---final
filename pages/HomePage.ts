import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  private searchInput = this.page.locator("#search_query_top");
  private searchButton = this.page.locator('button[name="submit_search"]');
  private signInLink = this.page.locator("a.login");

  async open() {
    await this.page.goto("http://www.automationpractice.pl");
  }

  async goToLogin() {
    await this.signInLink.click();
  }

  async searchFor(query: string) {
    await this.searchInput.fill(query);
    await this.searchButton.click();
  }

  // Category navigation methods
  async goToTShirts() {
    await this.page.locator('a[title="T-shirts"]').first().click();  // ← FIXED: Added .first()
    await this.page.waitForLoadState("networkidle");
  }

  async goToWomenCategory() {
    await this.page.locator('a[title="Women"]').first().click();
    await this.page.waitForLoadState("networkidle");
  }

  async goToDresses() {
    await this.page.locator('a[title="Dresses"]').first().click();  // ← FIXED: Added .first()
    await this.page.waitForLoadState("networkidle");
  }
}
