describe('Testar a pagina de login da unifor', () => {
   it('Teste se a pagina de login existe', () => {
       cy.visit('/');

       cy.contains('Usuários').click();
       cy.contains('Listar usuários').click();

       cy.contains('Listar Usuários').should('be.visible');


   })
});
