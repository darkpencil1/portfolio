import Sinon = require("cypress/types/sinon");
import * as actions from "../..//lib/actions";

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
    cy.fillCaptcha();
  });

  it("allows user to fill in form fields", () => {
    cy.fillFields();

    cy.get("input#first_name").should("have.value", "John");
    cy.get("input#last_name").should("have.value", "Doe");
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

  it.skip("submits the form and shows a success popup", () => {
    let submitFormStub: Sinon.SinonStub;
    // Mock the submitForm function
    submitFormStub = cy
      .stub(actions, "submitForm")
      .resolves({ success: "Message sent succesfully.", error: null });

    // Alias the stub for easier assertions
    cy.wrap(submitFormStub).as("submitFormStub");
    cy.fillFields();
    cy.fillCaptcha();
    cy.contains("button", "Submit").click(); // Submit the form
    // Assert that the submitForm function was called with the correct data
    cy.get("@submitFormStub").should("have.been.calledOnceWith", {
      first_name: "John",
      last_name: "Doe",
      email: "john.doe@example.com",
      message: "This is a test message.",
    });
    cy.wait(1000);
    cy.get("[data-cy='popup']").should("exist"); // Replace with actual popup class or identifier
  });
});
