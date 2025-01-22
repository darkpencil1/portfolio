import artwork from "@/resources/portfolio/artwork";

describe("Gallery Component", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders the image grid with all images by default", () => {
    cy.getDataCy("gallery").children().should("have.length", artwork.length);
  });

  it("filters images based on selected category", () => {
    const topics = ["all", "drawing", "painting", "digital"];

    topics.forEach((topic) => {
      cy.contains("li", topic).click();
      if (topic === "all") {
        cy.getDataCy("gallery-grid")
          .children()
          .should("have.length", artwork.length);
      } else {
        cy.getDataCy("gallery-grid")
          .children()
          .should(
            "have.length",
            artwork.filter((img) => img.category === topic).length
          );
      }
    });
  });

  it("opens the modal when an image is clicked", () => {
    cy.getDataCy("gallery-grid").children().first().click();
    cy.getDataCy("modal").should("be.visible");
    cy.getDataCy("modal-img").should("be.visible");
  });

  it("closes the modal when close button is clicked", () => {
    cy.getDataCy("gallery-grid").children().first().click();
    cy.getDataCy("modal").should("be.visible");
    cy.getDataCy("modal-close").click();
    cy.getDataCy("modal").should("not.exist");
  });

  it("prevents scrolling when the modal is open", () => {
    cy.getDataCy("gallery-grid").children().first().click();
    cy.get("body").should("have.class", "no-scroll");
    cy.getDataCy("modal-close").click();
    cy.get("body").should("not.have.class", "no-scroll");
  });

  it("navigates between images in the modal", () => {
    const images = artwork.map((img) => img.img);

    cy.getDataCy("gallery-grid").children().first().click();
    cy.getDataCy("modal-img").should("have.attr", "src", images[0]);

    cy.getDataCy("modal-next").click();
    cy.getDataCy("modal-img").should("have.attr", "src", images[1]);

    cy.getDataCy("modal-prev").click();
    cy.getDataCy("modal-img").should("have.attr", "src", images[0]);
  });
});
