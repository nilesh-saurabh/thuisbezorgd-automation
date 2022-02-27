
const acceptCookieButton = 'button[data-qa="privacy-settings-action-info"]'

/**
 * launches Website
 */
function launchWebsite() {
  cy.viewport(1440, 900);
  cy.visit('/en/delivery/food/breezanddijk-8766?showTestRestaurants=true');
}


/**
 * launches Website
 */
function acceptCookies() {
  cy.clickElement(acceptCookieButton);
}

export default {
  launchWebsite,
  acceptCookies
};