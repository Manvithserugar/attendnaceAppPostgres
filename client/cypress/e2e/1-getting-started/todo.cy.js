/// <reference types="Cypress" />

// describe("My First Test", () => {
//   it("Does not do much!", () => {
//     expect(true).to.equal(true);
//   });
// });

// describe("My First Test", () => {
//   it("Does not do much!", () => {
//     expect(true).to.equal(false);
//   });
// });

// describe("my first test", () => {
//   it("Visits the Kitchen Sink", () => {
//     cy.visit("https://example.cypress.io");
//   });
// });

// describe("My First Test", () => {
//   it('finds the content "type"', () => {
//     cy.visit("https://example.cypress.io");

//     cy.contains("type");
//   });
// });

describe("My First Test", () => {
  it('clicks the link "type"', () => {
    cy.visit("https://example.cypress.io");

    cy.contains("type").click();
    cy.url().should("include", "/commands/actions");
  });
});
