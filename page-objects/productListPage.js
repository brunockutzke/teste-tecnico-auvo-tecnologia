import { page } from "@playwright/test";

class ProductListPage {
  constructor(page) {
    this.page = page;
    this.firstProductTitleLink = page.locator("data-test=item-4-title-link");
  }

  async openFirstProductView() {
    await this.firstProductTitleLink.click();
  }
}

module.exports = { ProductListPage };