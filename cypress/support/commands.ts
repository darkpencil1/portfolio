Cypress.Commands.add("getDataCy", (selector: string) => {
  return cy.get(`[data-cy="${selector}"]`);
});

Cypress.Commands.add("fillCaptcha", () => {
  cy.get('[data-cy="generated-captcha"]').should("have.text", "");
  // Click the "Generate CAPTCHA" button
  cy.contains("button", "Generate CAPTCHA").click();

  // Wait for the CAPTCHA text to be generated (adjust timeout if needed)
  cy.get('[data-cy="generated-captcha"]').should("not.be.empty");

  // Copy the CAPTCHA text
  cy.get('[data-cy="generated-captcha"]')
    .invoke("text")
    .then((captchaText) => {
      expect(captchaText).to.have.length(6);
      // Insert the CAPTCHA text into the input field
      cy.get("#captchaInput").type(captchaText);
    });
});

Cypress.Commands.add("fillFields", () => {
  cy.get("input#name").type("John Doe");
  cy.get("input#email").type("john.doe@example.com");
  cy.get("textarea#message").type("This is a test message.");
});
