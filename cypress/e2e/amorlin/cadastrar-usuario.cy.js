import { abrirMenuUsuarios, gerarUsuario, viewports } from './usuario.helper';

viewports.forEach(({ nome, aplicar }) => {
  describe(`Cadastrar usuário — ${nome}`, () => {
    beforeEach(() => {
      aplicar();
    });

    it('exibe o formulário ao navegar pelo menu', () => {
      cy.visit('/');

      abrirMenuUsuarios();
      cy.contains('.dropdown-item', 'Cadastrar usuário').click();

      cy.url().should('include', '/admin/usuarios/cadastrar');
      cy.contains('h1', 'Cadastrar usuario').should('be.visible');
      cy.get('input[name="nome"]').should('be.visible');
      cy.get('input[name="email"]').should('be.visible');
      cy.get('input[name="senha"]').should('be.visible');
      cy.contains('button', 'Enviar').should('be.visible');
    });

    it('cadastra novo usuário e confirma persistência via API', () => {
      const usuario = gerarUsuario();

      cy.visit('/admin/usuarios/cadastrar');
      cy.get('input[name="nome"]').type(usuario.nome);
      cy.get('input[name="email"]').type(usuario.email);
      cy.get('input[name="senha"]').type(usuario.senha);
      cy.contains('button', 'Enviar').click();

      cy.contains('Novo usuario cadastrado com sucesso!').should('be.visible');

      cy.request('/admin/usuarios/api').then((response) => {
        expect(response.status).to.eq(200);
        const emails = response.body.map((u) => u.email);
        expect(emails).to.include(usuario.email);
      });
    });

    it('usuário recém-cadastrado aparece na listagem da UI', () => {
      const usuario = gerarUsuario();

      cy.visit('/admin/usuarios/cadastrar');
      cy.get('input[name="nome"]').type(usuario.nome);
      cy.get('input[name="email"]').type(usuario.email);
      cy.get('input[name="senha"]').type(usuario.senha);
      cy.contains('button', 'Enviar').click();

      cy.visit('/admin/usuarios/listar');
      cy.contains('td', usuario.nome).should('be.visible');
      cy.contains('td', usuario.email).should('be.visible');
    });
  });
});
