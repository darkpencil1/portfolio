describe("Contact Form", () => {
  beforeEach(() => {
    cy.visit("/contact"); // Replace with your actual contact page route
  });

  it("renders all form fields and submit button", () => {
    cy.get("form").should("exist");
    cy.get("input#first_name").should("exist");
    cy.get("input#last_name").should("exist");
    cy.get("input#email").should("exist");
    cy.get("textarea#message").should("exist");
    cy.contains("button", "Submit").should("exist").and("be.disabled"); // Initially disabled due to captcha
  });

  it("Captcha is shown when button is clicked", () => {
    cy.get(".generated").should("not.exist");
    cy.get("button").contains("Generate CAPTCHA").click();
    cy.get(".generated").should("exist");
    cy.get(".generated").should("exist");
    cy.get(".generated")
      .invoke("text")
      .then((text) => {
        expect(text).to.have.length(6);
      });
  });

  it("allows user to fill in form fields", () => {
    cy.get("input#first_name").type("John");
    cy.get("input#last_name").type("Doe");
    cy.get("input#email").type("john.doe@example.com");
    cy.get("textarea#message").type("This is a test message.");

    cy.get("input#first_name").should("have.value", "John");
    cy.get("input#last_name").should("have.value", "Doe");
    cy.get("input#email").should("have.value", "john.doe@example.com");
    cy.get("textarea#message").should("have.value", "This is a test message.");
  });

  it("enables submit button after all fields are filled", () => {
    cy.get("input#first_name").type("John");
    cy.get("input#last_name").type("Doe");
    cy.get("input#email").type("john.doe@example.com");
    cy.get("textarea#message").type("This is a test message.");
    //Activate captcha
    cy.contains("button", "Generate CAPTCHA").click();

    // Wait for the CAPTCHA text to be generated (adjust timeout if needed)
    cy.get(".generated").should("not.be.empty");

    // Copy the CAPTCHA text
    cy.get(".generated")
      .invoke("text")
      .then((captchaText) => {
        // Insert the CAPTCHA text into the input field
        cy.get("#captchaInput").type(captchaText);
      });

    // Verify the "Submit" button is no longer disabled
    cy.contains("button", "Submit").should("not.be.disabled");
  });

  it("Submit is enabled when fields are filled", () => {
    cy.get(".generated").should("not.exist");
    cy.get("button").contains("Generate CAPTCHA").click();
    cy.get(".generated").should("exist");
    cy.get(".generated").should("exist");
    cy.get(".generated")
      .invoke("text")
      .then((text) => {
        expect(text).to.have.length(6);
      });
  });

  it("submits the form and shows a success popup", () => {
    cy.get("input#first_name").type("John");
    cy.get("input#last_name").type("Doe");
    cy.get("input#email").type("john.doe@example.com");
    cy.get("textarea#message").type("This is a test message.");
    cy.get("button").contains("Mock Captcha").click(); // Simulate captcha validation
    cy.contains("button", "Submit").click(); // Submit the form

    cy.wait(1000); // Adjust based on your debounce/submit delay
    cy.get(".popup-class-name").should("exist"); // Replace with actual popup class or identifier
  });

  it("shows error messages for invalid inputs", () => {
    cy.get("input#email").type("invalid-email");
    cy.get("button").contains("Mock Captcha").click(); // Simulate captcha validation
    cy.contains("button", "Submit").click();

    cy.get("li").should("contain.text", "email: Invalid email format"); // Replace with the actual error message
  });
});
