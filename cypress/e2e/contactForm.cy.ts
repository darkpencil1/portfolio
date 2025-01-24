describe("Contact Form", () => {
  beforeEach(() => {
    cy.visit("/contact"); // Replace with your actual contact page route
  });

  it("renders all form fields and submit button", () => {
    cy.get("form").should("exist");
    cy.get("input#name").should("exist");
    cy.get("input#email").should("exist");
    cy.get("textarea#message").should("exist");
    cy.contains("button", "Submit").should("exist").and("be.disabled"); // Initially disabled due to captcha
  });

  it("Captcha is shown when button is clicked", () => {
    cy.fillCaptcha();
  });

  it("allows user to fill in form fields", () => {
    cy.fillFields();

    cy.get("input#name").should("have.value", "John Doe");
    cy.get("input#email").should("have.value", "john.doe@example.com");
    cy.get("textarea#message").should("have.value", "This is a test message.");
  });

  it("enables submit button after all fields are filled", () => {
    cy.contains("button", "Submit").should("be.disabled");

    cy.fillFields();
    cy.fillCaptcha();

    // Verify the "Submit" button is no longer disabled
    cy.contains("button", "Submit").should("not.be.disabled");
  });

  it("submits the form and shows a success popup", () => {
    cy.intercept("POST", "/contact", {
      headers: {
        "content-type": "text/x-component",
      },
      statusCode: 200,
      //Server actions have a very unique body structure
      body: `0:{"a":"$@1","f":"", "b":"development"}\n1:{ "success": "Message sent succesfully.", "error": null }\n`,
    }).as("submitForm");
    cy.fillFields();
    cy.fillCaptcha();
    cy.contains("button", "Submit").click(); // Submit the form
    cy.wait("@submitForm");
    cy.getDataCy("popup").should("exist");
  });
});
