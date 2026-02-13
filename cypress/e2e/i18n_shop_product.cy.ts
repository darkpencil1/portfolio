describe("Shop & Product i18n", () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit("/shop");
  });

  it("shows translated labels on product items and product page", () => {
    // Check English defaults
    cy.contains("from").should("be.visible");
    cy.contains("Read more").should("be.visible");

    // Toggle to Finnish
    cy.getDataCy("lang-toggle").click();

    // Product item should update
    cy.contains("alkaen").should("be.visible");
    cy.contains("Lue lisää").should("be.visible");

    // Click first product's read more
    cy.contains("Lue lisää").first().click();

    // On product page check product labels
    cy.contains("Arvioitu aika:").should("be.visible");
    cy.contains("Toimitus:").should("be.visible");
    cy.contains("+100€").should("be.visible");

    // Toggle back to English and check labels change
    cy.getDataCy("lang-toggle").click();
    cy.contains("Estimated time:").should("be.visible");
    cy.contains("Shipping:").should("be.visible");
  });
});
