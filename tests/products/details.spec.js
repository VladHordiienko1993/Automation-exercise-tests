const {test, expect} = require('@playwright/test');
const ProductPage = require('../../pages/ProductsPage');
const ProductDetailsPage = require('../../pages/ProductDetailsPage');


test('TC_006 Verify product details',async({page})=>{
    const productPage = new ProductPage(page);
    const productDetailsPage  = new ProductDetailsPage(page);

    await productPage.navigate();
    await expect(page).toHaveURL('/products');
    await productPage.viewProductLinks.first().click();
    await expect(page.url()).toContain('/product_details/');
    
    await expect(productDetailsPage.productName).toBeVisible();
    await expect(productDetailsPage.productCategory).toBeVisible();
    await expect(productDetailsPage.productPrice).toBeVisible();
    await expect(productDetailsPage.productAvailability).toBeVisible();
    await expect(productDetailsPage.productCondition).toBeVisible();
    await expect(productDetailsPage.productBrandName).toBeVisible();
    await expect(productDetailsPage.productImage).toBeVisible();
    await expect(productDetailsPage.productRatingStars).toBeVisible();
    await expect(productDetailsPage.productQuantitySelector).toBeVisible();
    await expect(productDetailsPage.addToCartButton).toBeVisible();

});