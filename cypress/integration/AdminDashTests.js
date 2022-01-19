// AdminDashTests.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/* ==== Test Created with Cypress Studio ==== */
it("Going to the reviews page", function () {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit("http://localhost:3000/");
  cy.get(".me-auto > :nth-child(1) > .nav-link").click();
  /* ==== End Cypress Studio ==== */
});

it("Going to the comments page", function () {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit("http://localhost:3000/");
  cy.get(".me-auto > :nth-child(1) > .nav-link").click();
  /* ==== End Cypress Studio ==== */
});

it("Going to the login page from the comments page", function () {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit("http://localhost:3000/");
  cy.get(".me-auto > :nth-child(1) > .nav-link").click();
  /* ==== End Cypress Studio ==== */
  /* ==== Generated with Cypress Studio ==== */
  cy.get(".navbar-brand").click();
  /* ==== End Cypress Studio ==== */
});

it("Going to the login page from the reviews page", function () {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit("http://localhost:3000/");
  cy.get(".me-auto > :nth-child(1) > .nav-link").click();
  /* ==== End Cypress Studio ==== */
  /* ==== Generated with Cypress Studio ==== */
  cy.get(".navbar-brand").click();
  /* ==== End Cypress Studio ==== */
});
