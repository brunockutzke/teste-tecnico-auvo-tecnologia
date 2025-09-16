import { test, expect } from '@playwright/test';

const { LoginPage } = require('../page-objects/loginPage')
const { CheckoutStepOnePage } = require('../page-objects/checkoutStepOnePage')
const { ProductListPage } = require('../page-objects/productListPage')
const { ProductPage } = require('../page-objects/productPage')
const { CartPage } = require('../page-objects/cartPage')
const { CheckoutStepTwoPage } = require('../page-objects/checkoutStepTwoPage')
const { CheckoutCompletePage } = require('../page-objects/checkoutCompletePage')

test('Should validate complete purchase flow in an e-commerce', async ({ page }) => {
  
  const loginPage = new LoginPage(page)
  const productListPage = new ProductListPage(page)
  const productPage = new ProductPage(page)
  const cartPage = new CartPage(page)
  const checkoutStepOnePage = new CheckoutStepOnePage(page)
  const checkoutStepTwoPage = new CheckoutStepTwoPage(page)
  const checkoutCompletePage = new CheckoutCompletePage(page)
  
  await loginPage.goto()
  await loginPage.login('standard_user', 'secret_sauce')
  await productListPage.openFirstProductView();
  await productPage.addProductToCart();
  await cartPage.openCheckoutView();
  await checkoutStepOnePage.fillCheckoutForm('Newton', 'Lewis', '80540000')
  await checkoutStepTwoPage.finishCheckout();
  await checkoutCompletePage.validateCheckoutConclusion();
});
