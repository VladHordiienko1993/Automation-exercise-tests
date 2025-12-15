


class AccountCreatedPage{
/**
     * 
     * @param {import('@playwright/test').Page} page 
     */
    constructor(page){

        this.page = page;
        this.accountCreatedMessage = page.getByRole("heading", {name: "Account Created!"});
        this.continueButton = page.getByRole("link", { name: "Continue" });
    }

    async clickContinueButton(){
        await this.continueButton.click();
    }
}

module.exports = AccountCreatedPage;