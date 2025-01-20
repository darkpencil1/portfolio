import { mount } from "cypress/react";

declare global {
  namespace Cypress {
    interface Chainable {
      fillCaptcha(): Chainable<Element>;
    }
  }
}

Cypress.Commands.add("fillCaptcha", () => {
  // Click the "Generate CAPTCHA" button
  cy.contains("button", "Generate CAPTCHA").click();

  // Wait for the CAPTCHA text to be generated (adjust timeout if needed)
  cy.get(".generated").should("not.be.empty");

  // Copy the CAPTCHA text
  cy.get(".generated")
    .invoke("text")
    .then((captchaText) => {
      // Insert the CAPTCHA text into the input field
      cy.get("#captchaInput").type(captchaText);
    });
});
