import { page, expect } from "@playwright/test";

class ProductPage {
  constructor(page) {
    this.page = page;
    this.inventoryItemName = page.locator("data-test=inventory-item-name")
    this.inventoryItemDescription = page.locator("data-test=inventory-item-desc");
    this.inventoryItemPrice = page.locator("data-test=inventory-item-price");
    this.addToCartButton = page.locator("data-test=add-to-cart");
    this.openCartButton = page.locator("data-test=shopping-cart-link");
  }

  async addProductToCart() {
    await expect(this.inventoryItemName).toBeVisible();
    await expect(this.inventoryItemDescription).toBeVisible();
    await expect(this.inventoryItemPrice).toBeVisible();
    await this.addToCartButton.click();
    await this.openCartButton.click();
  }
}

module.exports = { ProductPage };