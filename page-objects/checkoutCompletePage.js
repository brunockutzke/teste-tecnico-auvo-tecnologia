import { page, expect } from "@playwright/test";

class CheckoutCompletePage {
  constructor(page) {
    this.page = page;
    this.completeCheckoutHeader = page.locator("data-test=complete-header");
    this.backToProductsButton = page.locator("data-test=back-to-products");
  }

  async validateCheckoutConclusion() {
    await expect(this.completeCheckoutHeader).toBeVisible();
    await expect(this.backToProductsButton).toBeVisible();
  }
}

module.exports = { CheckoutCompletePage };