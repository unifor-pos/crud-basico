describe('Cadastro de usuario', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/admin/usuarios/cadastrar');
    });

    it('cadastra usuario com dados validos', () => {
        const email = `usuario.${Date.now()}@email.com`;

        cy.get('[data-cy="usuario-nome"]').type('Usuario Teste');
        cy.get('[data-cy="usuario-email"]').type(email);
        cy.get('[data-cy="usuario-senha"]').type('senha123');
        cy.get('[data-cy="usuario-submit"]').click();

        cy.contains('Novo usuario cadastrado com sucesso!').should('be.visible');
    });

    it('nao cadastra usuario com email invalido', () => {
        cy.get('[data-cy="usuario-nome"]').type('Usuario Teste');
        cy.get('[data-cy="usuario-email"]').type('email-invalido');
        cy.get('[data-cy="usuario-senha"]').type('senha123');
        cy.get('[data-cy="usuario-submit"]').click();

        cy.get('[data-cy="usuario-email"]').should('match', ':invalid');
        cy.contains('Novo usuario cadastrado com sucesso!').should('not.exist');
    });
});
