describe("Contact & Footer i18n", () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit("/");
  });

  it("translates Contact page and Footer when toggling language", () => {
    // Navigate to Contact page
    cy.contains("Contact").click();
    cy.url().should("include", "/contact");

    // English checks
    cy.contains("Contact me").should("be.visible");
    cy.contains("Always joy to hear from you").should("be.visible");

    // Footer English
    cy.contains("Accepting commissions!").should("be.visible");
    cy.contains("Pages").should("be.visible");
    cy.contains("Instagram").should("be.visible");

    // Toggle to Finnish
    cy.getDataCy("lang-toggle").click();

  // Contact page Finnish
  cy.contains("Ota yhteyttä").should("be.visible");
  cy.contains("Jos on kysyttävää").should("be.visible");

    // Footer Finnish
    cy.contains("Teen tilaustöitä!").should("be.visible");
    cy.contains("Sivut").should("be.visible");
    cy.contains("Instagram").should("be.visible");
  });
});
