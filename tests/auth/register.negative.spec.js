const {test, expect} = require('@playwright/test');
const SignupLoginPage = require('../../pages/SignupLoginPage');
const {validUser} = require('../../test-data/users');
const {wrongEmail} = require('../../test-data/invalidCredentials');


test.describe('TC_002: Registration with Invalid Email', ()=>{
    let signupLoginPage;

    test.beforeEach(async({page})=>{
        signupLoginPage = new SignupLoginPage(page);
        await signupLoginPage.navigate();
        await expect(page).toHaveURL('/login');
    });

    test('Set 1 - Missing @',async({page})=>{
        await signupLoginPage.fillSignupForm(validUser.name,wrongEmail.missingAt);
        await signupLoginPage.clickSignup();
        await expect(page).toHaveURL('/login');
        await expect(signupLoginPage.browserEmailErrorMessage).toBeTruthy();
        await expect(signupLoginPage.newUserSignupFormHeader).toBeVisible();
    });
    test('Set 2 - Space in email', async({page})=>{
        await signupLoginPage.fillSignupForm(validUser.name,wrongEmail.spaceInEmail);
        await signupLoginPage.clickSignup();
        await expect(page).toHaveURL('/login');
        await expect(signupLoginPage.browserEmailErrorMessage).toBeTruthy();
        await expect(signupLoginPage.newUserSignupFormHeader).toBeVisible();
    });
    test('Set 3 - Incomplete domain',async({page})=>{
        await signupLoginPage.fillSignupForm(validUser.name,wrongEmail.incompleteDomain);
        await signupLoginPage.clickSignup();
        await expect(page).toHaveURL('/login');
        await expect(signupLoginPage.browserEmailErrorMessage).toBeTruthy();
        await expect(signupLoginPage.newUserSignupFormHeader).toBeVisible();
    });
     test('Set 4 - Invalid domain',async({page})=>{
        await signupLoginPage.fillSignupForm(validUser.name,wrongEmail.invalidDomain);
        await signupLoginPage.clickSignup();
        await expect(page).toHaveURL('/login');
        await expect(signupLoginPage.browserEmailErrorMessage).toBeTruthy();
        await expect(signupLoginPage.newUserSignupFormHeader).toBeVisible();
    });
       test.skip('Set 5 - Email already exists',async({page})=>{
            // TODO: BUG_001 - waiting for fix
            // Expected: stay on /login
            // Actual: redirects to /signup
        await signupLoginPage.fillSignupForm(validUser.name,wrongEmail.existingEmail);
        await signupLoginPage.clickSignup();
        await expect(page).toHaveURL('/login');
        await expect(signupLoginPage.customEmailErrorMessage).toBeVisible();
        await expect(signupLoginPage.newUserSignupFormHeader).toBeVisible();
    });
      test('Set 6 - Empty email',async({page})=>{
        await signupLoginPage.fillSignupForm(validUser.name,wrongEmail.emptyEmail);
        await signupLoginPage.clickSignup();
        await expect(page).toHaveURL('/login');
        await expect(signupLoginPage.browserEmailErrorMessage).toBeTruthy();
        await expect(signupLoginPage.newUserSignupFormHeader).toBeVisible();
    });
})