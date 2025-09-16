import { page } from "@playwright/test";

class CartPage {
  constructor(page) {
    this.page = page;
    this.checkoutButton = page.locator("data-test=checkout");
  }

  async openCheckoutView() {
    await this.checkoutButton.click();
  }
}

module.exports = { CartPage };