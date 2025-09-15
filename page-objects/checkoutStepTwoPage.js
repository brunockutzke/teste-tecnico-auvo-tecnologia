import { page, expect } from "@playwright/test";

class CheckoutStepTwoPage {
  constructor(page) {
    this.page = page;
    this.itemCheckout = page.locator("data-test=inventory-item");
    this.finishCheckoutButton = page.locator("data-test=finish");
  }

  async finishCheckout() {
    await expect(this.itemCheckout).toBeVisible();
    await this.finishCheckoutButton.click();
  }
}

module.exports = { CheckoutStepTwoPage };