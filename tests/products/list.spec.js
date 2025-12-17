const {test, expect} = require('@playwright/test');
const ProductsPage = require('../../pages/ProductsPage');


test('TC_005 Verify All Products list', async({page})=>{
    
    const productsPage = new ProductsPage(page);

    await productsPage.navigate();
    await expect(page).toHaveURL('/products');
    await expect(productsPage.titleHeaderProducts).toBeVisible();

    const amountProducts = await productsPage.productCards.count();
    await expect(amountProducts).toBeGreaterThanOrEqual(10);
    
    await expect(productsPage.imgProducts.first()).toBeVisible();
    await expect(productsPage.nameProducts.first()).toBeVisible();
    await expect(productsPage.priceProducts.first()).toBeVisible();
    await expect(productsPage.addToCartButtons.first()).toBeVisible();
    await expect(productsPage.viewProductLinks.first()).toBeVisible();
});