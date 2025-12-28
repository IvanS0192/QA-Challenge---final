import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { SearchResultsPage } from "../pages/SearchResultsPage";
import { searchData } from "../data/search";

test("Search - query navigates to results page", async ({ page }) => {
  const home = new HomePage(page);
  const results = new SearchResultsPage(page);

  await home.open();
  await home.searchFor(searchData.validQuery);

  await expect(page).toHaveURL(/search_query=/i);
  await results.waitForResults();
  
 //assertion
  await results.getResultCount();
  await results.verifyResultsContain(searchData.validQuery);
  const count = await results.getResultCount();
  expect(count).toBeGreaterThan(0);
});