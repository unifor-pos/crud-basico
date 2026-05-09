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

Cypress.Commands.add('criarUsuario', (usuario) => {
	const ts = Date.now() + Math.floor(Math.random() * 10000);
	const dadosUsuario = usuario || {
		nome: `Teste Cypress ${ts}`,
		email: `teste.cypress.${ts}@mail.com`,
		senha: 'Senha@123',
	};

	cy.get('input[name="nome"]').clear().type(dadosUsuario.nome);
	cy.get('input[name="email"]').clear().type(dadosUsuario.email);
	cy.get('input[name="senha"]').clear().type(dadosUsuario.senha);
    cy.contains('button', 'Enviar').click();

    cy.contains('Novo usuario cadastrado com sucesso!').should('be.visible');

	return cy.wrap(dadosUsuario);
});