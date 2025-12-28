## Bug #1: All Products Show "Out of Stock" Status

### Severity: **HIGH** 
### Priority: **HIGH**
### Status: **Open**

### Description
All products on the website display "This product is no longer in stock" message, making it impossible for users to add any items to the shopping cart. This affects 100% of product inventory across all categories.

### Steps to Reproduce
1. Navigate to http://www.automationpractice.pl/index.php
2. Click on any category (Dresses, T-shirts, Blouses, etc.)
3. Click on any product from the listing
4. Observe the product detail page

**OR**

1. Navigate to homepage
2. Use search functionality (search for "dress", "t-shirt", "blouse", etc.)
3. Click on any product from search results
4. Observe the product detail page

### Expected Result
- Products should be available for purchase
- "Add to Cart" button should be visible and clickable
- Availability status should show "In Stock" for available items
- Users should be able to add products to their shopping cart

### Actual Result
- All products show "This product is no longer in stock" message
- "Add to Cart" button is hidden/disabled
- No products can be added to cart
- Inventory availability shows 0 for all products

### Impact
- **Critical business impact**: No products can be purchased
- **100% of inventory** is marked as unavailable
- Complete shopping functionality is broken
- Customers cannot complete purchase transactions
- Revenue generation is blocked

---

## Bug #2: Search Returns Incorrect results when a user searches for dresses

### Severity: **MEDIUM** 
### Priority: **MEDIUM**
### Status: **Open**

### Description
The search functionality returns incorrect results when a user searches for dresses.

### Steps to Reproduce
1. Navigate to http://www.automationpractice.pl/index.php
2. In the search box at top, enter 'dress'
3. Click search button or press Enter
4. Once the results are displayed, scroll down on the page.

### Expected Result
- Search for dresses should return only dresses in the results.

### Actual Result
Search for dresses returns also the results for t-shirt and blouse together with the results for dresses.

### Impact
Inaccurate search results directly impact user experience and conversion rates. Users searching for dresses expect relevant results; showing unrelated items increases frustration, reduces trust, and leads to abandoned sessions and lost revenue. Over time, it also increases support costs and puts the business at a competitive disadvantage

---

## Bug #3: Homepage image displays wrong text

### Severity: **LOW** 
### Priority: **LOW**
### Status: **Open**

### Description
Homepage image displays 'Your Logo a new experience' instead of 'My shop' which acts as a homepage.

### Steps to Reproduce
1. Navigate to www.automationpractice.pl/index.php 
2. Inspect the header navigation elements
3. Look for image with `Your Logo a new experience` text
4. Hover over it

### Expected Result
- The homepage image should display 'My shop'

### Actual Result
- Homepage image displays 'Your Logo a new experience' instead of 'My shop' which acts as a homepage.

### Impact
- **Minor accessibility issue**
- Affects users relying on screen readers
- May not meet WCAG accessibility standards
- Inconsistent with standard web practices

```