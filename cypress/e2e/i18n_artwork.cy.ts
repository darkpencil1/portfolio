describe("Artwork page i18n", () => {
  beforeEach(() => {
    // ensure a clean language state and desktop viewport
    cy.clearLocalStorage();
    cy.viewport(1280, 720);
    cy.visit("/");
  });

  it("shows translated gallery filter labels when language is toggled", () => {
    // English labels
    cy.contains("All").should("be.visible");
    cy.contains("Painting").should("be.visible");
    cy.contains("Digital").should("be.visible");
    cy.contains("Drawing").should("be.visible");

    // Toggle language
    cy.getDataCy("lang-toggle").click();

    // Finnish labels expected (updated translations)
    cy.contains("Kaikki").should("be.visible");
    cy.contains("Maalaus").should("be.visible");
    cy.contains("Digitaalinen").should("be.visible");
    cy.contains("Piirustus").should("be.visible");
  });
});
