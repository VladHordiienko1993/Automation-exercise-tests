ID: TC_007 

Title: Search products by name (valid query)

Priority: Medium

Severity: Medium

Preconditions:
* At least 5 products exist in system
* Product page accessible without login

Test data:
* Search query: "dress"

Steps:
1. Navigate to “/products”
2. Enter search query into search input (dress)
3. Click search button


Expected result:
1. Search executes successfully
- "SEARCHED PRODUCTS" heading visible
- URL contains '/products'
2. Search results displayed
- At least 1 product found
- Each product name contains search query "dress"
3. Product card contains: 
- Product image  
- Product name 
- Price 
- "View Product" button
- "Add to cart" button

Actual result:

Status: Not Run