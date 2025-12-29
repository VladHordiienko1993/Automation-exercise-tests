

class ProductDetailsPage{

/**
 * 
 * @param {import('@playwright/test').Page} page 
 */

    constructor(page){
        this.page = page;
        

        this.productName = page.locator('.product-information h2');
        this.productCategory = page.locator('.product-information p').first();
        this.productPrice = page.locator('.product-information span span');
        this.productAvailability = page.locator('.product-information p:has-text("Availability")');
        this.productCondition = page.locator('.product-information p:has-text("Condition")');
        this.productBrandName  = page.locator('.product-information p:has-text("Brand")');
        this.productImage = page.locator('.view-product img');
        this.productRatingStars = page.locator('.product-information img').last();
        this.productQuantitySelector = page.locator('.product-information span label');
        this.addToCartButton = page.locator('.product-information span button');

    }
}

module.exports = ProductDetailsPage;