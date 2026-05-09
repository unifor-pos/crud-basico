
const home = 'http://localhost:8080';

describe('Testar a pagina de login da unifor', () => {

   it('Teste se a pagina de login existe', () => {
       cy.visit(home);

       cy.contains('Usuários').click();

       cy.contains('Listar').click();

       cy.contains('Listar Usuários').should('be.visible');
       cy.contains('+ Novo Usuário').should('be.visible');

    //    cy.contains('<table>').should('be.visible');

       cy.contains('ID').should('be.visible');
       cy.contains('Nome').should('be.visible');
       cy.contains('Endereço').should('be.visible');
       cy.contains('Email').should('be.visible');
       cy.contains('Ações').should('be.visible');
   })
});