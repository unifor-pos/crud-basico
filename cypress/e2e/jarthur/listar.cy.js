describe('Página de Listar Usuários', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080');
        cy.get('[data-cy="menu-usuarios"]').click();
        cy.get('[data-cy="menu-usuarios-listar"]').click();
    });

    it('Deve renderizar a lista de usuários corretamente', () => {
        cy.contains('h1', 'Listar Usuários').should('be.visible');
        cy.get('[data-cy="btn-novo-usuario"]').should('be.visible').and('have.text', '+ Novo Usuário');
        cy.get('[data-cy="tabela-usuarios"]').should('be.visible');
        cy.get('th').contains('Nome').should('be.visible');
        cy.get('th').contains('Email').should('be.visible');
        cy.get('th').contains('Endereço').should('be.visible');
        cy.get('th').contains('Ações').should('be.visible');
    });

    it('Deve redirecionar para a página de cadastro ao clicar em Novo Usuário', () => {
        cy.get('[data-cy="btn-novo-usuario"]').click();
        cy.url().should('include', '/admin/usuarios/cadastrar');
        cy.contains('h1', 'Cadastrar usuario').should('be.visible');
    });

    it('Deve exibir os botões de ação Editar e Excluir nas linhas', () => {
        cy.get('body').then($body => {
            if ($body.find('[data-cy="linha-usuario"]').length > 0) {
                cy.get('[data-cy="linha-usuario"]').first().within(() => {
                    cy.get('[data-cy="btn-editar"]').should('be.visible');
                    cy.get('[data-cy="btn-excluir"]').should('be.visible');
                });
            }
        });
    });
});
