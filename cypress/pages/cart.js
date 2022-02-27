

const burgerDropdown = 'select[data-qa="item-choices-variants-select-element"]';
const dropdownButton = 'button[data-qa="item-choices-action-submit"]';
const checkoutButton = 'button[data-qa="sidebar-action-checkout"]';
const streetSelector = 'input[placeholder="Type street name"]';
const houseNumberSelector = 'input[placeholder="Type house number"]';
const postcodeSelector = 'input[placeholder="Type your postal code"]';
const citySelector = 'input[placeholder="Type your city"]';
const nameSelector = 'input[placeholder="Type your first and last name"]';
const emailSelector = 'input[placeholder="yourname@email.com"]';
const phoneSelector = 'input[placeholder="Type your phone number"]';
const cashPaymentSelector = 'div[data-qa="multi-step-checkout-details-payment-element-element"]';
const cashOptionSelector = 'Cash';
const doneButton = 'button[data-qa="payment-modal-action-submit"]';
const orderCheckoutButton = 'button[data-qa="multi-step-checkout-action-submit-order"]';
const errorMessageSelector = 'div[data-qa="local-error-banner-delivery"]';

/**
 * Adds burgers to cart
 */
function addBurgerToCart(chickenBurger, beefBurger) {
  cy.wait(2000);
  cy.clickTextElement(chickenBurger);
  cy.wait(2000);
  cy.clickTextElement(beefBurger);
  cy.selectDropdown(burgerDropdown, 0);
  cy.clickElement(dropdownButton);
}

/**
 * Fills customer info in checkout 
 * @param {string} streetName 
 * @param {string} houseNumber 
 * @param {string} postcode 
 * @param {string} cityName 
 * @param {string} userName 
 * @param {string} emailId 
 * @param {string} phoneNumberValue 
 */
function checkout(streetName, houseNumber, postcode, cityName, userName, emailId, phoneNumberValue) {
  cy.clickElement(checkoutButton);
  cy.wait(1000)
  cy.enterText(streetSelector, streetName);
  cy.enterText(houseNumberSelector, houseNumber);
  cy.clearText(postcodeSelector);
  cy.enterText(postcodeSelector, postcode);
  cy.clearText(citySelector);
  cy.enterText(citySelector, cityName);
  cy.enterText(nameSelector, userName);
  cy.enterText(emailSelector, emailId);
  cy.enterText(phoneSelector, phoneNumberValue);
}

/**
 * Selects cash payment option
 */
function selectPaymentCashOption() {
  cy.clickElement(cashPaymentSelector);
  cy.clickTextWebElement(cashOptionSelector);
  cy.clickElement(doneButton);
  cy.clickElement(orderCheckoutButton);
}

/**
 * validates error message
 */
function validateErrorMessage(errorMessage) {
  cy.get(errorMessageSelector).invoke("text").then(formatString).should("eq", errorMessage);
}

function formatString(text) {
  return text.replace('kr', '').replace('\u00A0', '').trim();
}
export default {
  addBurgerToCart,
  checkout,
  selectPaymentCashOption,
  validateErrorMessage
};