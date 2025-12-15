const {test, expect} = require('@playwright/test');
const SignupLoginPage = require('../../pages/SignupLoginPage');
const testDataUser = require('../../test-data/users');
const testDataInvalidEmails = require('../../test-data/invalidEmails');


test.describe('TC_002: Registration with Invalid Email', ()=>{
    let signupLoginPage;

    test.beforeEach(async({page})=>{
        signupLoginPage = new SignupLoginPage(page);
        await signupLoginPage.navigate();
        await expect(page).toHaveURL('/login');
    });

    test('Set 1 - Missing @',async({page})=>{
        await signupLoginPage.fillSignupForm(testDataUser.validUser.name,testDataInvalidEmails.missingAt);
        await signupLoginPage.clickSignup();
        await expect(page).toHaveURL('/login');
        await expect(signupLoginPage.browserEmailErrorMessage).toBeTruthy();
        await expect(signupLoginPage.newUserSignupFormHeader).toBeVisible();
    });
    test('Set 2 - Space in email', async({page})=>{
        await signupLoginPage.fillSignupForm(testDataUser.validUser.name,testDataInvalidEmails.spaceInEmail);
        await signupLoginPage.clickSignup();
        await expect(page).toHaveURL('/login');
        await expect(signupLoginPage.browserEmailErrorMessage).toBeTruthy();
        await expect(signupLoginPage.newUserSignupFormHeader).toBeVisible();
    });
    test('Set 3 - Incomplete domain',async({page})=>{
        await signupLoginPage.fillSignupForm(testDataUser.validUser.name,testDataInvalidEmails.incompleteDomain);
        await signupLoginPage.clickSignup();
        await expect(page).toHaveURL('/login');
        await expect(signupLoginPage.browserEmailErrorMessage).toBeTruthy();
        await expect(signupLoginPage.newUserSignupFormHeader).toBeVisible();
    });
     test('Set 4 - Invalid domain',async({page})=>{
        await signupLoginPage.fillSignupForm(testDataUser.validUser.name,testDataInvalidEmails.invalidDomain);
        await signupLoginPage.clickSignup();
        await expect(page).toHaveURL('/login');
        await expect(signupLoginPage.browserEmailErrorMessage).toBeTruthy();
        await expect(signupLoginPage.newUserSignupFormHeader).toBeVisible();
    });
       test.skip('Set 5 - Email already exists',async({page})=>{
            // TODO: BUG_001 - waiting for fix
            // Expected: stay on /login
            // Actual: redirects to /signup
        await signupLoginPage.fillSignupForm(testDataUser.validUser.name,testDataInvalidEmails.existingEmail);
        await signupLoginPage.clickSignup();
        await expect(page).toHaveURL('/login');
        await expect(signupLoginPage.customEmailErrorMessage).toBeVisible();
        await expect(signupLoginPage.newUserSignupFormHeader).toBeVisible();
    });
      test('Set 6 - Empty email',async({page})=>{
        await signupLoginPage.fillSignupForm(testDataUser.validUser.name,testDataInvalidEmails.emptyEmail);
        await signupLoginPage.clickSignup();
        await expect(page).toHaveURL('/login');
        await expect(signupLoginPage.browserEmailErrorMessage).toBeTruthy();
        await expect(signupLoginPage.newUserSignupFormHeader).toBeVisible();
    });
})