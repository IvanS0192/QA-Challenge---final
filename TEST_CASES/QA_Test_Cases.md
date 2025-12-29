# Manual Test Cases

This document outlines the **manual test cases** for the **Search Feature** on the website  
 [https://automationpractice.pl/index.php](https://automationpractice.pl/index.php)

We will validate that the search functionality returns relevant results, handles invalid or empty inputs properly, and displays the correct messages.  

## Search Feature — Manual Test Cases


TC001: Verify search field visibility on homepage.
(Prerequisites: User is on Homepage)
1. Action: Once on Homepage, observe the top navigation area
   Expected Result: Search input field is vissible and active.


TC002: Verify valid product search returns correct results.
 (Prerequisites: User is on Homepage)
1. Action: Enter 'dress' in the Search box and click the search icon  
   Expected Result: Products with “dress” in name or description are displayed.


TC003:
Verify search with uppercase/lowercase returns same results. (Prerequisites: User is on Homepage)
1. Action: Enter 'dress' in the Search box and click the search icon.
   Expected Result: Products with “dress” in name or description are displayed.
2. Action: Enter 'DRESS' in the Search box and click the search icon.
   Expected Result: Products with “dress” in name or description are displayed.


TC004: 
Verify search with partial keyword. (Prerequisites: User is on Homepage)
1. Action: Enter 'dre' in the Search box and click the search icon.
   Expected Result: Products containing “dre” appear in results.


TC005:
Verify search for non-existent product. (Prerequisites: User is on Homepage)
1. Action: Enter 'spaceship' in the Search box and click the search icon.
   Expected Result: 'No results were found for your search "Spaceship"' message is displayed.


TC006:
Verify empty search submission. (Prerequisites: User is on Homepage)
1. Action: Leave the search field empty and click the search icon.
   Expected Result: The system displays a validation message 'Please enter a search keyword'


TC007: 
Verify search suggestions/autocomplete (if available). (Prerequisites: User is on Homepage)
1. Action: Begin typing “dre”.
   Expected Result: Suggestion dropdown appears (if supported).


TC008:
Verify results page displays total number of results . (Prerequisites: User is on Homepage)
1. Action: Enter 'dress' in the Search box and click the search icon.
   Expected Result: Results page shows 'X results have been found'.


TC009:
Verify clicking product in results opens product page. (Prerequisites: User is on Homepage)
1. Action: Enter 'dress' in the Search box and click the search icon.
   Expected Result: Products with “dress” in name or description are displayed.
2. Action: Click any product title/image.
   Expected Result: Product detail page loads correctly.


TC010:
Verify search query persists in URL. (Prerequisites: User is on Homepage)
1. Action: Enter 'dress' in the Search box and click the search icon.
   Expected Result: Products with “dress” in name or description are displayed.
2. Action: Observe the URL after searching for 'dress'.
   Expected Result: URL contains query parameter `?search_query=dress`.


TC011:
Verify search with a very long string (>100 chars) (if a restriction is implemented). (Prerequisites: User is on Homepage)
1. Action: Start entering characters in the Search box.
   Expected Result:Once you reach 100, the system should display a validation message 'Maximum 100 characters allowed.' (or something similar for ex. 'This field cannot exceed 100 characters.', 'Maximum length is 100 characters.', etc)


