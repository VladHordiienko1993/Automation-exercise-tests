const {test, expect} = require('@playwright/test');
const HomePage = require('../../pages/HomePage');
const SignupLoginPage = require('../../pages/SignupLoginPage');
const SignupPage = require('../../pages/SignupPage');
const AccountCreatedPage = require('../../pages/AccountCreatedPage');
const DeleteAccountPage = require('../../pages/DeleteAccountPage');
const {validUser} = require('../../test-data/users');

test('TC_001: Register New User with Valid Data (E2E)', async({page})=>{
     const homePage = new HomePage(page);
     const signupLoginPage = new SignupLoginPage(page);
     const signupPage = new SignupPage(page);
     const accountCreatedPage = new AccountCreatedPage(page);
     const deleteAccountPage = new DeleteAccountPage(page);

     await homePage.navigate();
     await expect(page).toHaveURL('/');
     await expect(homePage.logo).toBeVisible();
     await homePage.clickSignupLoginButton();
     await expect(page).toHaveURL('/login');
     await expect(signupLoginPage.newUserSignupFormHeader).toBeVisible();
     await signupLoginPage.fillSignupForm(validUser.name, validUser.email);
     await signupLoginPage.clickSignup();
     await expect(page).toHaveURL('/signup');
     await expect(signupPage.formHeaderTitle).toBeVisible();
     await signupPage.fillAccountInfo(validUser.password,validUser.day,validUser.month,validUser.year);
     await signupPage.checkNewsLetterAndOffers();
     await signupPage.fillAddressInfo(
        validUser.firstName,validUser.lastName,validUser.companyName,
        validUser.address,validUser.country,validUser.state,
        validUser.city,validUser.zipcode,validUser.mobile);
     await signupPage.clickCreateAccount();
     await expect(page).toHaveURL('/account_created');
     await expect(accountCreatedPage.accountCreatedMessage).toBeVisible();
     await accountCreatedPage.clickContinueButton();
     await expect(page).toHaveURL('/'); 
     await expect(homePage.loggedInUserName).toBeVisible();
     await expect(homePage.logoutButton).toBeVisible();
     await homePage.clickDeleteAccount();
     await expect(page).toHaveURL('/delete_account');
     await expect(deleteAccountPage.accountDeletedMessage).toBeVisible();
     await deleteAccountPage.clickContinueButton();
     await expect(page).toHaveURL('/');
    
})