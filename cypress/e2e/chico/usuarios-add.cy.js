describe('Cadastro de usuario', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.contains('Usuários').click();
        cy.contains('Cadastrar usuário').click();
    });

    it('cadastra usuario com dados validos', () => {
        cy.intercept('POST', '/admin/usuarios/cadastrar', 'Novo usuario cadastrado com sucesso!').as('cadastrarUsuario');

        cy.get('[data-cy="usuario-nome"]').type('Usuario Teste');
        cy.get('[data-cy="usuario-email"]').type('usuario.teste@email.com');
        cy.get('[data-cy="usuario-senha"]').type('senha123');
        cy.get('[data-cy="usuario-submit"]').click();

        cy.wait('@cadastrarUsuario');
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
