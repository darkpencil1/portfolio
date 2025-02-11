describe("Shop page", () => {
  beforeEach(() => {
    // Visit the shop before each test
    cy.visit("/shop");
  });

  it("should redirect to the product page when the button is clicked", () => {
    // Click the first product
    cy.getDataCy("product-item").first().find("button").first().click();

    // Assert that the user is redirected to the right product page
    cy.url().should("eq", "http://localhost:3000/product/1");
  });
});
