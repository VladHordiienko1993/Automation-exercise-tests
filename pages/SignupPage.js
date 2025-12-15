


class SignupPage{
/**
     * 
     * @param {import('@playwright/test').Page} page 
     */

    constructor(page){

        this.page = page;
        this.formHeaderTitle = page.getByText("Enter Account Information Title Mr. Mrs. Name * Email * Password * Date of");
        this.radioPersonMr = page.getByRole("radio", { name: "Mr." });
        this.passwordInput = page.getByRole("textbox", { name: "Password *" });
        this.dayDropdown = page.locator("#days");
        this.monthDropdown = page.locator("#months");
        this.yearDropdown = page.locator("#years");
        this.checkboxNewsLetter = page.getByRole("checkbox", {name: "Sign up for our newsletter!"});
        this.checkboxSpecialOffers = page.getByRole("checkbox", {name: "Receive special offers from"});
        this.firstNameInput = page.getByRole("textbox", {name: "First name *"});
        this.lastNameInput = page.getByRole("textbox", { name: "Last name *" });
        this.companyNameInput = page.getByRole("textbox", {name: "Company",exact: true});
        this.addressInput = page.getByRole("textbox", {name: "Address * (Street address, P."});
        this.countryDropdown = page.getByLabel("Country *");
        this.stateInput = page.getByRole("textbox", { name: "State *" });
        this.zipcodeInput = page.locator('#zipcode')
        this.cityInput = page.getByRole("textbox", {name: "City * Zipcode *"});
        this.mobileInput = page.getByRole("textbox", { name: "Mobile Number *" });
        this.createAccountButton = page.getByRole("button", { name: "Create Account" });
    }
 
    async fillAccountInfo(password,day,month,year){
        await this.radioPersonMr.check();
        await this.passwordInput.fill(password);
        await this.dayDropdown.selectOption(day);
        await this.monthDropdown.selectOption(month);
        await this.yearDropdown.selectOption(year);
    };

    async checkNewsLetterAndOffers(){
        await this.checkboxNewsLetter.check();
        await this.checkboxSpecialOffers.check();
    };

    async fillAddressInfo(firstName,lastName,companyName,address,country,state,city,zipcode,mobileNumber){
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.companyNameInput.fill(companyName);
        await this.addressInput.fill(address);
        await this.countryDropdown.selectOption(country);
        await this.stateInput.fill(state);
        await this.cityInput.fill(city);
        await this.zipcodeInput.fill(zipcode);
        await this.mobileInput.fill(mobileNumber);
    };

   async clickCreateAccount(){
    await this.createAccountButton.click();
   };

}

module.exports = SignupPage;