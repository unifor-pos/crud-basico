describe('Testar a pagina de login da unifor', () => {
   it('Teste se a pagina de login existe', () => {
       cy.visit('http://localhost:8080');

       cy.contains('Usuários').click();

       cy.contains('Listar').click();

       cy.contains('Listar Usuários').should('be.visible');


   })
});