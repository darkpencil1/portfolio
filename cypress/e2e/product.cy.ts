describe("Product page", () => {
  beforeEach(() => {
    // Visit the shop before each test
    cy.visit("/product/1");
  });

  it("should redirect to contact page when clicking button", () => {
    // Click the button
    cy.getDataCy("product-nav-button").click();

    // Assert that the user is redirected to the contact page
    cy.url().should("eq", "http://localhost:3000/contact");
  });
});
