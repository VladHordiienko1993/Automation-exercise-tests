const {test, expect} = require('@playwright/test');
const HomePage = require('../../pages/HomePage');
const SignupLoginPage = require('../../pages/SignupLoginPage');
const SignupPage = require('../../pages/SignupPage');
const AccountCreatedPage = require('../../pages/AccountCreatedPage');
const DeleteAccountPage = require('../../pages/DeleteAccountPage');
const testData = require('../../test-data/users');

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
     await signupLoginPage.fillSignupForm(testData.validUser.name, testData.validUser.email);
     await signupLoginPage.clickSignup();
     await expect(page).toHaveURL('/signup');
     await expect(signupPage.formHeaderTitle).toBeVisible();
     await signupPage.fillAccountInfo(testData.validUser.password,testData.validUser.day,testData.validUser.month,testData.validUser.year);
     await signupPage.checkNewsLetterAndOffers();
     await signupPage.fillAddressInfo(
        testData.validUser.firstName,testData.validUser.lastName,testData.validUser.companyName,
        testData.validUser.address,testData.validUser.country,testData.validUser.state,
        testData.validUser.city,testData.validUser.zipcode,testData.validUser.mobile);
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