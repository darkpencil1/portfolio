/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    fillCaptcha(): Chainable;
    fillFields(): Chainable;
    getDataCy(name: string): Chainable;
  }
}
