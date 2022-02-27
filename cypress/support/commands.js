// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// gets data from json file inx fixture
Cypress.Commands.add('getData', (file) => {
  cy.fixture(file).then(function (data) {
    this.data = data;
  })
})
// clicks webelement
Cypress.Commands.add('clickElement', (label) => {
  cy.get(label).should('be.visible').click();
})

// Enters text into input tag
Cypress.Commands.add('enterText', (selector, text) => {
  cy.get(selector).should('be.visible').type(text);
})

// Clicks text webelement
Cypress.Commands.add('clickTextElement', (label) => {
  cy.contains(label).should('be.visible').click({ force: true });
})

// Clicks checkbox
Cypress.Commands.add('clickCheckbox', (label) => {
  cy.get(label).should('be.visible').check();
})

// Clicks webelement using xpath
Cypress.Commands.add('clickElementUsingXpath', (label) => {
  cy.xpath(label).should('be.visible').click();
})

// Clicks first webelement matching css selector
Cypress.Commands.add('clickFirstElement', (label) => {
  cy.get(label).first().click();
})

//Selects an <option> within a <select>.
Cypress.Commands.add('selectDropdown', (selector, selectorValue) => {
  cy.get(selector).should('be.visible').select(selectorValue);
})

//To clear on a DOM element
Cypress.Commands.add('clearText', (selector) => {
  cy.get(selector).clear();
})

//  Clicks on text webelement 
Cypress.Commands.add('clickTextWebElement', (label) => {
 cy.contains(label).click();
})
