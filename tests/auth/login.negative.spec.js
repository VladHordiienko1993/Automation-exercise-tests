const {test,expect} = require('@playwright/test');
const SignupLoginPage = require('../../pages/SignupLoginPage');
const {loginUser} = require('../../test-data/users');
const {wrongPassword} = require('../../test-data/invalidCredentials');

test.describe('Invalid login', ()=>{

    let signupLoginPage;

    test.beforeEach(async({page})=>{
        signupLoginPage = new SignupLoginPage(page);
        await signupLoginPage.navigate();
        await expect(page).toHaveURL('/login');
        await expect(signupLoginPage.loginFormHeader).toBeVisible();
    });

    test('TC_004 Login user with wrong password',async({page})=>{
        await signupLoginPage.fillLoginForm(loginUser.email,wrongPassword.password);
        await signupLoginPage.clickLoginButton();
        await expect(signupLoginPage.customEmailPasswordErrorMessage).toBeVisible();
        await expect(page).toHaveURL('/login');
        await expect(signupLoginPage.loginFormHeader).toBeVisible();
    });

})