// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('createAUser', () => {
    cy.get('[data-cy="user-name"]').type('masqueico');
    cy.get('[data-cy="user-address"]').type("Rua do Fim, 123");
    cy.get('[data-cy="user-email"]').type("masqueico123@gmail.com");
    cy.get('[data-cy="user-password"]').type("batata123");
})

Cypress.Commands.add('getByData', (selector) => {
  return cy.get(`[data-cy=${selector}]`)
})