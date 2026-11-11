import {test, expect} from 'playwright/test'
import { LoginPage } from '../pages/loginPage'
import { ProductsPage } from '../pages/productsPage'
import { loginData } from '../utils/loginUsers'

test.describe('Sauce Demo login Tests with Hooks', () => {
    test.beforeEach(async({page})=>{
        await page.goto('/');
    });
    
    
    
    test('verify successful login with standard user', async ({page}) => {
        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);

        await loginPage.loginAsStandardUser(loginData.validUser.username, loginData.validUser.password);
        await productsPage.verifyLoginSuccess();

    })
})