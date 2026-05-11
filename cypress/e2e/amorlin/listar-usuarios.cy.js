import { abrirMenuUsuarios, viewports } from './usuario.helper';

viewports.forEach(({ nome, aplicar }) => {
  describe(`Listar usuários — ${nome}`, () => {
    beforeEach(() => {
      aplicar();
    });

    it('navega pelo menu até a tela de listagem', () => {
      cy.visit('/');

      abrirMenuUsuarios();
      cy.contains('.dropdown-item', 'Listar usuários').click();

      cy.url().should('include', '/admin/usuarios/listar');
      cy.contains('h1', 'Listar Usuários').should('be.visible');
    });

    it('exibe a tabela com todas as colunas esperadas', () => {
      cy.visit('/admin/usuarios/listar');

      ['ID', 'Nome', 'Endereço', 'Email', 'Ações'].forEach((coluna) => {
        cy.contains('th', coluna).should('be.visible');
      });
    });

    it('botão "Novo Usuário" leva para o cadastro', () => {
      cy.visit('/admin/usuarios/listar');

      cy.contains('a', '+ Novo Usuário').click();

      cy.url().should('include', '/admin/usuarios/cadastrar');
      cy.contains('h1', 'Cadastrar usuario').should('be.visible');
    });
  });
});

describe('Listar usuários — API', () => {
  it('endpoint /api retorna a lista em JSON', () => {
    cy.request('/admin/usuarios/api').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.headers['content-type']).to.match(/application\/json/);
      expect(response.body).to.be.an('array');
    });
  });
});
