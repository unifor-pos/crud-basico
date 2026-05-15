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

    it('Não deve salvar usuário com todos os campos em branco', () => {
        cy.get('[data-cy="btn-salvar"]').click();

        // Verifica se a mensagem de sucesso NÃO apareceu
        cy.contains('Novo usuario cadastrado com sucesso!').should('not.exist');
    });

    describe('Validação de campos obrigatórios ausentes', () => {
        let timestamp;
        let nome;
        let email;
        let endereco;

        beforeEach(() => {
            timestamp = new Date().getTime();
            nome = `Usuário Teste ${timestamp}`;
            email = `teste${timestamp}@email.com`;
            endereco = 'Rua das Flores, 123';
        });

        it('Não deve salvar usuário sem o Nome', () => {
            cy.get('[data-cy="endereco-input"]').type(endereco);
            cy.get('[data-cy="email-input"]').type(email);
            cy.get('[data-cy="senha-input"]').type('senha123');

            cy.get('[data-cy="btn-salvar"]').click();
            cy.contains('Novo usuario cadastrado com sucesso!').should('not.exist');
        });

        it('Não deve salvar usuário sem o Endereço', () => {
            cy.get('[data-cy="nome-input"]').type(nome);
            cy.get('[data-cy="email-input"]').type(email);
            cy.get('[data-cy="senha-input"]').type('senha123');

            cy.get('[data-cy="btn-salvar"]').click();
            cy.contains('Novo usuario cadastrado com sucesso!').should('not.exist');
        });

        it('Não deve salvar usuário sem o Email', () => {
            cy.get('[data-cy="nome-input"]').type(nome);
            cy.get('[data-cy="endereco-input"]').type(endereco);
            cy.get('[data-cy="senha-input"]').type('senha123');

            cy.get('[data-cy="btn-salvar"]').click();
            cy.contains('Novo usuario cadastrado com sucesso!').should('not.exist');
        });

        it('Não deve salvar usuário sem a Senha', () => {
            cy.get('[data-cy="nome-input"]').type(nome);
            cy.get('[data-cy="endereco-input"]').type(endereco);
            cy.get('[data-cy="email-input"]').type(email);

            cy.get('[data-cy="btn-salvar"]').click();
            cy.contains('Novo usuario cadastrado com sucesso!').should('not.exist');
        });
    });
});
