describe('Edicao de usuario', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.contains('Usuários').click();
        cy.contains('Listar usuários').click();
        cy.get('[data-cy="editar-usuario"]').first().click();
    });

    it('preenche formulario de edicao com dados validos', () => {
        cy.get('[data-cy="usuario-nome"]').type('Usuario Editado');
        cy.get('[data-cy="usuario-endereco"]').type('Rua Teste, 123');
        cy.get('[data-cy="usuario-email"]').type('usuario.editado@email.com');
        cy.get('[data-cy="usuario-senha"]').type('senha123');

        cy.get('[data-cy="usuario-nome"]').should('have.value', 'Usuario Editado');
        cy.get('[data-cy="usuario-endereco"]').should('have.value', 'Rua Teste, 123');
        cy.get('[data-cy="usuario-email"]').should('match', ':valid');
        cy.get('[data-cy="usuario-senha"]').should('have.value', 'senha123');
    });

    it('nao aceita email invalido na edicao', () => {
        cy.get('[data-cy="usuario-nome"]').type('Usuario Editado');
        cy.get('[data-cy="usuario-endereco"]').type('Rua Teste, 123');
        cy.get('[data-cy="usuario-email"]').type('email-invalido');
        cy.get('[data-cy="usuario-senha"]').type('senha123');
        cy.get('[data-cy="usuario-submit"]').click();

        cy.get('[data-cy="usuario-email"]').should('match', ':invalid');
    });
});
