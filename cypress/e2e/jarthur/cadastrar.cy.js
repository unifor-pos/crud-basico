describe('Página de Cadastrar Usuário', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080');
        cy.get('[data-cy="menu-usuarios"]').click();
        cy.get('[data-cy="menu-usuarios-cadastrar"]').click();
    });

    it('Deve renderizar a página de cadastro corretamente', () => {
        cy.contains('h1', 'Cadastrar usuario').should('be.visible');
        cy.get('[data-cy="nome-input"]').should('be.visible');
        cy.get('[data-cy="endereco-input"]').should('be.visible');
        cy.get('[data-cy="email-input"]').should('be.visible');
        cy.get('[data-cy="senha-input"]').should('be.visible');
        cy.get('[data-cy="btn-salvar"]').should('be.visible').and('have.text', 'Enviar');
    });

    it('Deve preencher e submeter o formulário de cadastro', () => {
        const timestamp = new Date().getTime();
        const nome = `Usuário Teste ${timestamp}`;
        const email = `teste${timestamp}@email.com`;
        
        cy.get('[data-cy="nome-input"]').type(nome);
        cy.get('[data-cy="endereco-input"]').type('Rua das Flores, 123');
        cy.get('[data-cy="email-input"]').type(email);
        cy.get('[data-cy="senha-input"]').type('senha123');
        
        cy.get('[data-cy="btn-salvar"]').click();
        
        // Verifica a mensagem de sucesso
        cy.contains('Novo usuario cadastrado com sucesso!').should('be.visible');
    });
});
