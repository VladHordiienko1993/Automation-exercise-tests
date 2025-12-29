ID:  TC_006

Title: Verify product details

Priority: High

Severity: Major

Preconditions:
- At least 1 product exist in system
- Product page accessible without login

Steps:
1. Navigate to “/products”
2. Click "View Product" button on first product


Expected result:
1. Navigation successful:
   - URL contains /product_details/
2. Product detail page displays information:
   - Product Name (visible)
   - Category (visible)
   - Price (visible)
   - Availability (visible)
   - Condition (visible)
   - Brand name (visible)
3. Additional elements visible:
   - Product image
   - Rating stars
   - Quantity selector
   - "Add to cart" button

Actual result:
As expected

Status: Passed