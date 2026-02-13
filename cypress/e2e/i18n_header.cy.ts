describe("Header i18n", () => {
  beforeEach(() => {
    // Ensure desktop layout to see nav links
    cy.viewport(1280, 720);
    cy.visit("/");
  });

  it("toggles language and updates header title and nav labels", () => {
    // Initial state should be English
    cy.contains("Art of Ville Lähetkangas").should("be.visible");
    cy.contains("About").should("be.visible");

    // Toggle to Finnish
    cy.getDataCy("lang-toggle").click();

    // Header title and nav should update
    cy.contains("Ville Lähetkangas").should("be.visible");
    cy.contains("Tietoa").should("be.visible");

    // Toggle back to English
    cy.getDataCy("lang-toggle").click();
    cy.contains("Art of Ville Lähetkangas").should("be.visible");
  });
});
