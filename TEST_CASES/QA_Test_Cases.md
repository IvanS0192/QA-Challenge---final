# Manual Test Cases

This document outlines the **manual test cases** for the **Search Feature** on the website  
 [https://automationpractice.pl/index.php](https://automationpractice.pl/index.php)

We will validate that the search functionality returns relevant results, handles invalid or empty inputs properly, and displays the correct messages.  

## Search Feature — Manual Test Cases


TC001:
Verify search field visibility on homepage. (Prerequisites: User is on Homepage)
1. Once on Homepage, observe the top navigation area   -   Search input field is vissible and active.
2. Finish test.

TC002:
Verify valid product search returns correct results. (Prerequisites: User is on Homepage)
1. Enter 'dress' in the Search box and click the search icon   -   Products with “dress” in name or description are displayed.
2. Finish test.

TC003:
Verify search with uppercase/lowercase returns same results. (Prerequisites: User is on Homepage)
1. Enter 'dress' in the Search box and click the search icon   -   Products with “dress” in name or description are displayed.
2. Enter 'DRESS' in the Search box and click the search icon   -   Products with “dress” in name or description are displayed.
3. Finish test.

TC004: 
Verify search with partial keyword. (Prerequisites: User is on Homepage)
1. Enter 'dre' in the Search box and click the search icon   -   Products containing “dre” appear in results.
2. Finish test.

TC005:
Verify search for non-existent product. (Prerequisites: User is on Homepage)
1. Enter 'spaceship' in the Search box and click the search icon   -   'No results were found for your search "Spaceship"' message is displayed.
2. Finish test.

TC006:
Verify empty search submission. (Prerequisites: User is on Homepage)
1. Leave the search field empty and click the search icon   -   The system displays a validation message 'Please enter a search keyword'
2. Finish test.

TC007: 
Verify search suggestions/autocomplete (if available). (Prerequisites: User is on Homepage)
1. Begin typing “dre”.   -   Suggestion dropdown appears (if supported).
2. Finish test.

TC008:
Verify results page displays total number of results . (Prerequisites: User is on Homepage)
1. Enter 'dress' in the Search box and click the search icon.   -   Results page shows 'X results have been found'.
2. Finish test.

TC009:
Verify clicking product in results opens product page. (Prerequisites: User is on Homepage)
1. Enter 'dress' in the Search box and click the search icon   -   Products with “dress” in name or description are displayed.
2. Click any product title/image.   -   Product detail page loads correctly.
3. Finish test.

TC010:
Verify search query persists in URL. (Prerequisites: User is on Homepage)
1. Enter 'dress' in the Search box and click the search icon   -   Products with “dress” in name or description are displayed.
2. Observe the URL after searching for 'dress'.   -   URL contains query parameter `?search_query=dress`.
3. Finish test.

TC011:
Verify search with a very long string (>100 chars) (if a restriction is implemented). (Prerequisites: User is on Homepage)
1. Start entering characters in the Search box   -   Once you reach 100, the system should display a validation message 'Maximum 100 characters allowed.' (or something similar for ex. 'This field cannot exceed 100 characters.', 'Maximum length is 100 characters.', etc)
2. Finish test.

