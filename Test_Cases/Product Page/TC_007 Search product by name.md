ID: TC_007 

Title: Search product by name

Priority: Medium

Severity: Medium

Preconditions:
* At least 5 products exist in system
* Product page accessible without login

Test data:
* Search query: "dress"

Steps:
1. Navigate to “https://automationexercise.com/products”
2. Enter search query into search input (dress)
3. Click search button
4. Wait for result

Expected result:
1. Search executes successfully
2. "SEARCHED PRODUCTS" heading visible
3. Search results displayed
4. Search results validation:
- At least 1 product found
- Each product name contains search query "dress"
- No irrelevant products displayed
5. Each product card in results contains: -
 Product image (not broken) 
- Product name (with search term)
- Price - "View Product" button

Actual result:

Status: Not Run