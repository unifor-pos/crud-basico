import UsuarioPage from '../../support/pages/UsuarioPage';

describe('Página de Listar Usuários', () => {
    beforeEach(() => {
        UsuarioPage.acessarPaginaListagem();
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
        const timestamp = new Date().getTime();
        const nome = `Usuário Botões ${timestamp}`;
        const email = `botoes${timestamp}@email.com`;

        UsuarioPage.cadastrarNovoUsuario(nome, 'Rua das Flores, 123', email, 'senha123');
        UsuarioPage.acessarPaginaListagem();

        cy.contains('tr[data-cy="linha-usuario"]', email).as('linhaUsuario');

        cy.get('@linhaUsuario').within(() => {
            cy.get('[data-cy="btn-editar"]').should('be.visible');
            cy.get('[data-cy="btn-excluir"]').should('be.visible');

            cy.get('[data-cy="btn-excluir"]').click();
        });

        cy.contains('Usuário excluido com sucesso!').should('be.visible');
    });

    it('Fluxo completo: Cria usuário, verifica na listagem e o exclui', () => {
        const timestamp = new Date().getTime();
        const nome = `Usuário E2E ${timestamp}`;
        const endereco = `Avenida Brasil, ${timestamp}`;
        const email = `e2e${timestamp}@email.com`;
        const senha = 'senha123';

        cy.get('[data-cy="btn-novo-usuario"]').click();

        UsuarioPage.preencherCadastro(nome, endereco, email, senha);
        UsuarioPage.submeterCadastro();
        UsuarioPage.elements.msgSucesso().should('be.visible');

        UsuarioPage.acessarPaginaListagem();

        cy.contains('tr[data-cy="linha-usuario"]', email).as('novaLinha');
        cy.get('@novaLinha').within(() => {
            cy.get('td').eq(1).should('contain', nome);
            cy.get('td').eq(2).should('contain', endereco);
            cy.get('td').eq(3).should('contain', email);

            cy.get('[data-cy="btn-excluir"]').click();
        });

        cy.contains('Usuário excluido com sucesso!').should('be.visible');
    });
});
