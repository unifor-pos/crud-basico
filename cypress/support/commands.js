import random from './random';

Cypress.Commands.add('createAUser', () => {
  const { name, password, email } = random.generateCredentials();

  cy.get('[data-cy="user-name"]').type(name);
  cy.get('[data-cy="user-address"]').type("Rua do Fim, 123");
  cy.get('[data-cy="user-email"]').type(email);
  cy.get('[data-cy="user-password"]').type(password);
})

Cypress.Commands.add('getByData', (selector) => {
  return cy.get(`[data-cy=${selector}]`)
})