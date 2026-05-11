describe('Listagem de usuarios', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.contains('Usuários').click();
        cy.contains('Listar usuários').click();
    });

    it('exibe a tabela de usuarios', () => {
        cy.contains('h1', 'Listar Usuários').should('be.visible');
        cy.get('[data-cy="usuarios-tabela"]').should('be.visible');

        cy.get('[data-cy="usuarios-tabela"]').within(() => {
            cy.contains('th', 'ID').should('be.visible');
            cy.contains('th', 'Nome').should('be.visible');
            cy.contains('th', 'Endereço').should('be.visible');
            cy.contains('th', 'Email').should('be.visible');
            cy.contains('th', 'Ações').should('be.visible');
        });
    });

    it('navega para cadastro de novo usuario', () => {
        cy.get('[data-cy="novo-usuario"]').click();

        cy.url().should('include', '/admin/usuarios/cadastrar');
        cy.contains('h1', 'Cadastrar usuario').should('be.visible');
    });
});
