import { Page } from "@playwright/test";

class CheckoutStepOnePage {
  constructor(page) {
    this.page = page;
    this.checkoutButton = page.locator("data-test=checkout")
    this.firstNameInput = page.locator("data-test=firstName");
    this.lastNameInput = page.locator("data-test=lastName");
    this.postalCodeInput = page.locator("data-test=postalCode");
    this.submitButton = page.locator("data-test=continue");
  }

  async fillCheckoutForm(firstName, lastName, postalCode) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
    await this.submitButton.click();
  }
}

module.exports = { CheckoutStepOnePage };