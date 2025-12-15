

class SignupLoginPage{
    /**
     * 
     * @param {import('@playwright/test').Page} page 
     */


    constructor(page){

        this.page = page;
        this.newUserSignupFormHeader = page.getByText("New User Signup! Signup");
        this.userNameInput = page.getByRole("textbox", { name: "Name" });
        this.userEmailInput = page.locator("form").filter({ hasText: "Signup" }).getByPlaceholder("Email Address");
        this.signupButton = page.getByRole("button", { name: "Signup" });
        this.cookieDialog = page.getByRole('button', { name: /Consent|Соглашаюсь/i });
        this.customEmailErrorMessage = page.getByText('Email Address already exist!');
        this.browserEmailErrorMessage = page.locator('[data-qa="signup-email"]');
    }

    /**
     * 
     * @param {string} name 
     * @param {string} email 
     */

    async fillSignupForm(name,email){
        await this.userNameInput.fill(name);
        await this.userEmailInput.fill(email);
    };
    
    async clickSignup(){
        await this.signupButton.click();
    };
    async navigate(){
        await this.page.goto('/login');
        await this.cookieDialog.click();
    }
}

module.exports = SignupLoginPage;