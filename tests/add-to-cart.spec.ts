import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { SearchResultsPage } from "../pages/SearchResultsPage";
import { ProductPage } from "../pages/ProductPage";
import { searchData } from "../data/search";

test("Out of stock product shows warning message", async ({ page }) => {
  // STEP 1: Create page objects (helpers that know how to use pages)
  const home = new HomePage(page);
  
  // STEP 2: Go to homepage
  await home.open();
  
  // STEP 3: Search for something
  await home.searchFor("dress");
  
  // STEP 4: Open first product
  const results = new SearchResultsPage(page);
  await results.openFirstProduct();
  
 // Step 4: Verify out of stock message shows
  const productPage = new ProductPage(page);
  await productPage.verifyOutOfStockMessage();  

});

test(" Verify empty shopping cart message", async ({ page }) => {
  // Step 1: Open the homepage
  await page.goto("http://www.automationpractice.pl");
  console.log(" Homepage opened successfully.");

  // Step 2: Click on the Cart icon (top right corner)
  const cartIcon = page.locator("//span[@class='ajax_cart_no_product']");
  await expect(cartIcon).toBeVisible();
  await cartIcon.click();
  console.log("Clicked on the cart icon.");

  // Step 3: Verify the shopping cart (order) page opens
  await expect(page).toHaveURL("http://www.automationpractice.pl/index.php?controller=order");
  console.log(" Shopping cart (order) page loaded.");

  // Step 4: Verify the empty cart message appears
  const emptyMessage = page.locator("//p[@class='alert alert-warning']");
  await expect(emptyMessage).toBeVisible();
  await expect(emptyMessage).toHaveText("Your shopping cart is empty.");
  console.log("Verified message: 'Your shopping cart is empty.'");

});
