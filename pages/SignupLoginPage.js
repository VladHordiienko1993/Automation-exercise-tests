

class SignupLoginPage{
    /**
     * 
     * @param {import('@playwright/test').Page} page 
     */


    constructor(page){
        this.page = page;
//          Signup side
        this.newUserSignupFormHeader = page.getByText("New User Signup! Signup");
        this.userNameInput = page.getByRole("textbox", { name: "Name" });
        this.userEmailInputSignup = page.locator("form").filter({ hasText: "Signup" }).getByPlaceholder("Email Address");
        this.signupButton = page.getByRole("button", { name: "Signup" });
        this.customEmailErrorMessage = page.getByText('Email Address already exist!');
        this.browserEmailErrorMessage = page.locator('[data-qa="signup-email"]');
//          Login side
        this.loginFormHeader =  page.getByRole('heading', { name: 'Login to your account' });
        this.emailInputForLogin = page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address');
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });

//          Other
        this.cookieDialog = page.getByRole('button', { name: /Consent|Соглашаюсь/i });
        this.signupLoginButtonInHeader = page.getByRole('link', { name: ' Signup / Login' });
    };

    /**
     * 
     * @param {string} name 
     * @param {string} email 
     */

    async fillSignupForm(name,email){
        await this.userNameInput.fill(name);
        await this.userEmailInputSignup.fill(email);
    };
    
    async clickSignup(){
        await this.signupButton.click();
    }; 

    async fillLoginForm(email,password){
        await this.emailInputForLogin.fill(email);
        await this.passwordInput.fill(password);
    };

    async clickLoginButton(){
        await this.loginButton.click();
    }
   
    async navigate(){
        await this.page.goto('/login');
        try {
        await this.cookieDialog.click({ timeout: 3000 });
    } catch {}
    };
  
}
module.exports = SignupLoginPage;