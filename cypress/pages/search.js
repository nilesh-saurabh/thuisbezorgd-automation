
const searchBoxSelector = 'div[data-qa="restaurant-list-search"]';
const restaurantNameSelector = 'div[data-qa="search-result-card-element"]';

/**
 * 
 * @param {string} restaurantName 
 */
function searchRestaurant(restaurantName) {
  cy.wait(2000)
  cy.clickElement(searchBoxSelector);
  cy.wait(2000)
  cy.enterText(searchBoxSelector, restaurantName);
}

/**
 * Selects restaurant
 */
function selectRestaurant() {
  cy.clickFirstElement(restaurantNameSelector);
}



export default {
  searchRestaurant,
  selectRestaurant
};