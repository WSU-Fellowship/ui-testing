/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('catculator app', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://localhost:4200');
  });

  it('displays two cat pictures', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get('.cats').should('have.length', 2);
  });

  it("has 'Catculator' title", () => {
    cy.get('#title').should('have.text', 'Catculator');
  });

  it('has inputs for two numbers', () => {
    cy.get('input').should('have.length', 2);

    // A different way to make the same assertion
    // cy.get('#num1').should('exist');
    // cy.get('#num2').should('exist');
  });

  it('should have a button for performing addition', () => {
    cy.get('button#add').should('have.text', 'Add');
  });

  it('should have a button for performing subtraction', () => {
    cy.get('button#subtract').should('have.text', 'Subtract');
  });

  it('should have a button for performing multiplication', () => {
    // todo: add assertion
  });

  // todo: add it and assertion for division similar to above
  

  it('should display result', () => {
    cy.get('#num1').type(10);
    cy.get('#num2').type(13);
    cy.get('#add').click();
    cy.get('.result').should('have.text', 'Result: 23');
  });
});
