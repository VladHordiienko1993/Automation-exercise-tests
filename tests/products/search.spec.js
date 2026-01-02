const {test, expect} = require('@playwright/test');
const ProductsPage = require('../../pages/ProductsPage');
const {validQueries} = require('../../test-data/searchQueries');



test.describe('valid searching products', ()=>{
    let productsPage;

    test.skip('TC_007 Search products by name (valid query)',async({page})=>{

                                  // TODO: BUG_002 - search returns irrelevant results

        productsPage = new ProductsPage(page);
        await productsPage.navigate();
        await expect(page).toHaveURL('/products');
        await productsPage.fillSearchInput(validQueries.dress);
        await productsPage.clickSubmitSearchButton();
        await expect(productsPage.titleHeaderProducts).toBeVisible();
        const amountProducts = await productsPage.productCards.count();
        await expect(amountProducts).toBeGreaterThanOrEqual(1);
        
        const allNames = await productsPage.nameProducts.allTextContents();

        for (const name of allNames) {
            expect(name.toLowerCase()).toContain(validQueries.dress);
        };
        await expect(productsPage.imgProducts.first()).toBeVisible();
        await expect(productsPage.nameProducts.first()).toBeVisible();
        await expect(productsPage.priceProducts.first()).toBeVisible();
        await expect(productsPage.viewProductLinks.first()).toBeVisible();
        await expect(productsPage.addToCartButtons.first()).toBeVisible();
    })
});