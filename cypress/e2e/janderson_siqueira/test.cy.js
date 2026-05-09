describe('CRUD de usuários', () => {
  const timestamp = Date.now();
  const usuario = {
    nome: `Teste Janderson ${timestamp}`,
    email: `teste.cypress.${timestamp}@mail.com`,
    senha: 'Senha@123',
  };

    const usuario2 = {
    nome: `Teste Janderson2 ${timestamp}`,
    email: `teste.Janderson2.${timestamp}@mail.com`,
    senha: 'Senha@123',
  };

  beforeEach(() => {
    cy.visit('http://localhost:8080');
  });

  it('navega até a listagem dos usuários via UI', () => {
    cy.contains('Usuários').click();
    cy.contains('Listar').click();

    cy.contains('Listar Usuários').should('be.visible');
    cy.contains('+ Novo Usuário').should('be.visible');
  });

  it('cadastra um novo usuário pela tela de listagem', () => {
    cy.contains('Usuários').click();
    cy.contains('Listar usuários').click();
    cy.contains('+ Novo Usuário').click();

    cy.criarUsuario(usuario).as('usuario');

  });

  it('cadastra um novo usuário de forma mais direta', () => {
    cy.contains('Usuários').click();
    cy.contains('Cadastrar usuário').click();

    cy.criarUsuario(usuario2).as('usuario2');

  });
});