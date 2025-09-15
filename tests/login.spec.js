import { test, expect } from '@playwright/test';
const { LoginPage } = require('../page-objects/loginPage')
const { CheckoutPage } = require('../page-objects/checkoutPage')
const { ProductPage } = require('../page-objects/productPage')
const { CheckoutStepTwoPage } = require('../page-objects/checkoutStepTwoPage')

test.only('Select product and verify title, price and description', async ({ page }) => {
  
  const loginPage = new LoginPage(page)
  
  const checkoutPage = new CheckoutPage(page)

  const productPage = new ProductPage(page)

  const checkoutStepTwoPage = new CheckoutStepTwoPage(page)

  await loginPage.goto()

  await loginPage.login('standard_user', 'secret_sauce')
  
  await page.locator('data-test=item-4-title-link').click();

  await productPage.addProductToCart();

  await page.locator('data-test=checkout').click();

  await checkoutPage.fillCheckoutForm('Newton', 'Lewis', '80540000')

  await checkoutStepTwoPage.finishCheckout();

  await expect(page.locator('data-test=complete-header')).toBeVisible()

  await expect(page.locator('data-test=back-to-products')).toBeVisible()

  
  
});
