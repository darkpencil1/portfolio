describe("Header Component", () => {
  beforeEach(() => {
    // Visit the homepage before each test
    cy.visit("/");
  });

  it("should redirect to the homepage when the logo is clicked", () => {
    // Click the logo
    cy.getDataCy("nav__logo").click();

    // Assert that the user is redirected to the homepage
    cy.url().should("eq", "http://localhost:3000/"); // Adjust the base URL if needed
  });

  context("Mobile menu", () => {
    beforeEach(() => {
      // Simulate a mobile screen by setting the viewport size
      cy.viewport("iphone-6"); // Or you can use a custom size
    });

    it("should show the hamburger icon on mobile", () => {
      // Check if the hamburger icon is visible
      cy.getDataCy("nav__toggleImg").should("be.visible");
    });

    it("should toggle the mobile menu when the hamburger icon is clicked", () => {
      // Click to open the menu
      cy.getDataCy("nav__toggleImg").click();

      // Check that the menu opens (check for the first mobile link, for example)
      cy.getDataCy("mobileLink").first().should("be.visible");

      // Click to close the menu
      cy.getDataCy("nav__toggleImg").click();

      cy.getDataCy("mobileLink").should("have.length", 0);
    });

    it("should navigate to the correct page when a mobile link is clicked", () => {
      // Open the mobile menu
      cy.getDataCy("nav__toggleImg").click();

      // Click the 'About' link
      cy.contains("About").click();

      // Assert that the URL changes to the 'About' page
      cy.url().should("include", "/about");
    });
  });

  context("Desktop menu", () => {
    beforeEach(() => {
      // Set a larger viewport for desktop testing
      cy.viewport(1280, 720);
    });

    it("should display navigation links correctly on desktop", () => {
      // Ensure the navigation links are visible
      cy.getDataCy("desktopLink").should("have.length", 4); // Check there are 4 items

      // Assert that each link is present
      cy.contains("Artwork").should("be.visible");
      cy.contains("About").should("be.visible");
      cy.contains("Contact").should("be.visible");
      cy.contains("Shop").should("be.visible");
    });

    it("should navigate to the correct page when a desktop link is clicked", () => {
      // Click the 'Contact' link
      cy.contains("Contact").click();

      // Assert that the URL changes to the 'Contact' page
      cy.url().should("include", "/contact");
    });
  });

  context("Responsive behavior", () => {
    it("should adapt to mobile view when the screen width is smaller", () => {
      // Resize the window to mobile size
      cy.viewport(480, 800);

      // Check that the hamburger menu is visible in mobile view
      cy.getDataCy("nav__toggleImg").should("be.visible");
    });

    it("should adapt to desktop view when the screen width is larger", () => {
      // Resize the window to desktop size
      cy.viewport(1280, 720);

      // Ensure the desktop navigation links are visible and the hamburger is hidden
      cy.getDataCy("desktopLink").should("have.length", 4);
      cy.getDataCy("nav__toggleImg").should("not.exist");
    });
  });
});
