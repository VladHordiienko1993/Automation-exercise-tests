



class ProductsPage{
/**
 * 
 * @param {import('@playwright/test').Page} page 
 */

    constructor(page){
        this.page = page;
    //                          All amount
        this.productCards = page.locator('.features_items .col-sm-4');
        this.titleHeaderProducts = page.getByRole('heading', { name: 'All Products' });
        this.nameProducts = page.locator('.productinfo p');
        this.imgProducts = page.locator('.productinfo img');
        this.priceProducts = page.locator('.productinfo h2');
        this.viewProductLinks = page.locator('a[href^="/product_details"]');
        this.addToCartButtons = page.locator('.productinfo .add-to-cart');
    //                          Each product personally

    //                          Other things
        this.cookieDialog = page.getByRole('button', { name: /Consent|Соглашаюсь/i });

    };

    async navigate(){
        await this.page.goto('/products');
        try {
            await this.cookieDialog.click({timeout:3000});
        } catch{}
    };
};

module.exports = ProductsPage;