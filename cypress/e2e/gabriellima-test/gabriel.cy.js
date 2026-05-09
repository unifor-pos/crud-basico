describe('Testar o projeto', () => {
   it('Teste se os usuários estão sendo listados', () => {
       cy.visit('/');
       cy.getByData('usuarios-menu').click();
       cy.getByData('listar-usuarios-menu').click();
       cy.getByData('lista-usuarios').should('be.visible');
   });

   it('Teste o cadastro de usuarios', () => {
        cy.visit('/');

        cy.getByData('usuarios-menu').click();
        cy.getByData('cadastrar-usuario-menu').click();

        cy.createAUser();
        cy.getByData("submit-user").click();
        cy.contains('Novo usuario cadastrado com sucesso').should('be.visible');
   })
});