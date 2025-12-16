const {test, expect} = require('@playwright/test');
const HomePage = require('../../pages/HomePage');
const SignupLoginPage = require('../../pages/SignupLoginPage');
const {loginUser} = require('../../test-data/users');


test('TC_003 Login user with valid data',async({page})=>{
    const homePage  = new HomePage(page);
    const signupLoginPage = new SignupLoginPage(page);

    await signupLoginPage.navigate();
    await expect(page).toHaveURL('/login');
    await expect(signupLoginPage.loginFormHeader).toBeVisible();
    await signupLoginPage.fillLoginForm(loginUser.email,loginUser.password);
    await signupLoginPage.clickLoginButton();
    await expect(page).toHaveURL('/');
    await expect(homePage.loggedInUserName).toBeVisible();
    await expect(homePage.logoutButton).toBeVisible();
    await homePage.clickLogoutButton();
    await expect(page).toHaveURL('/login');
    await expect(signupLoginPage.loginFormHeader).toBeVisible();
});

