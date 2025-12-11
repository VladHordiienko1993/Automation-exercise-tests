

class SignupLoginPage{


    constructor(page){

        this.page = page;
        this.newUserSignupFormHeader = page.getByText("New User Signup! Signup");
        this.userNameInput = page.getByRole("textbox", { name: "Name" });
        this.userEmailInput = page.locator("form").filter({ hasText: "Signup" }).getByPlaceholder("Email Address");
        this.signupButton = page.getByRole("button", { name: "Signup" });
    }

    async fillSignupForm(name,email){
        await this.userNameInput.fill(name);
        await this.userEmailInput.fill(email);
    };
    
    async clickSignup(){
        await this.signupButton.click();
    }
}

module.exports = SignupLoginPage;