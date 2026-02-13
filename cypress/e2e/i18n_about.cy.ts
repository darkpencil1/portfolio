describe("About page i18n", () => {
  beforeEach(() => {
    // Use desktop viewport to ensure header nav and content are visible
    cy.viewport(1280, 720);
    cy.visit("/");
  });

  it("shows translated About content when language is toggled", () => {
    // Navigate to About page
    cy.contains("About").click();
    cy.url().should("include", "/about");

    // English content
    cy.contains("Hello there").should("be.visible");
    cy.contains("My name is Ville Lähetkangas").should("be.visible");
    cy.contains("Cheers").should("be.visible");

    // Toggle to Finnish using header button
    cy.getDataCy("lang-toggle").click();

    // Finnish content expected
    cy.contains("Hei").should("be.visible");
    cy.contains("Nimeni on Ville Lähetkangas").should("be.visible");
    cy.contains("Terve!").should("be.visible");
  });
});
