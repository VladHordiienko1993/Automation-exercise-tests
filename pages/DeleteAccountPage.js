


class DeleteAccountPage{

    constructor(page){

        this.page = page;
        this.accountDeletedMessage = page.getByRole("heading", {name: "Account Deleted!"});
        this.continueButton = page.getByRole('link', { name: 'Continue' });
    }

    async clickContinueButton(){
        await this.continueButton.click({force: true})
    }
};

module.exports = DeleteAccountPage;