// type definitions for Cypress object "cy"
/// <reference types="cypress" />

import { launchWebsite, acceptCookies } from "../../pages/login";

import {
  searchRestaurant,
  selectRestaurant
} from "../../pages/search";

import {
  addBurgerToCart,
  checkout,
  selectPaymentCashOption,
  validateErrorMessage
} from "../../pages/cart";


describe('Thuisbezorgd E2E Automation Tests', function () {
  //Use the cy.fixture() method to pull data from fixture file
  before(function () {
    //Provide the data from the fixture
    cy.getData('testdata');
  })
  beforeEach(() => {
    //Launches thuisbezorgd Url
    launchWebsite();
    acceptCookies();
  })
  it('Add burger to cart', function () {
    searchRestaurant(this.data.restaurantName);
    selectRestaurant();
    addBurgerToCart(this.data.chickenBurger, this.data.beefBurger);
    checkout(this.data.streetName, this.data.houseNumber, this.data.postcode, this.data.city, this.data.userName, this.data.email, this.data.phoneNum);
    selectPaymentCashOption();
    validateErrorMessage(this.data.errorMessage);
  })
})

