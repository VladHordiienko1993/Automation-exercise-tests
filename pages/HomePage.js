

class HomePage{
    
    
    constructor(page){
        this.page = page;
        this.signupLoginButton = page.getByRole("link", {name: " Signup / Login",});
        this.logo = page.getByRole("link", { name: "Website for automation" });
        this.loggedInUserName = page.locator('a:has-text("Logged in as")');
        this.logoutButton =  page.getByRole('link', { name: ' Logout' });
        this.deleteAccountButton = page.getByRole("link", {name: " Delete Account"});
        this.cookieDialog = page.getByRole('button', { name: /Consent|Соглашаюсь/i });
    }

    async navigate(){
        await this.page.goto('/');
        await this.cookieDialog.click();
    };
    async clickSignupLoginButton(){
        await this.signupLoginButton.click();
    };

    async clickDeleteAccount(){
        await this.deleteAccountButton.click()
    }

}

module.exports = HomePage;