describe("Teste de listagem de usuários", () => {

  beforeEach(() => {

    cy.visit("http://localhost:8080");

    cy.contains("Usuários").click();

    cy.contains("Listar usuários").click();

  });

  it("Deve carregar a página de listagem", () => {

    cy.get('[data-cy="titulo-pagina"]')
      .should("be.visible")
      .and("contain", "Lista de Usuários");

  });

  it("Deve exibir a tabela de usuários", () => {

    cy.get('[data-cy="tabela-usuarios"]')
      .should("exist")
      .and("be.visible");

  });

  it("Deve possuir pelo menos um usuário cadastrado", () => {

    cy.get('[data-cy="linha-usuario"]')
      .should("have.length.greaterThan", 0);

  });

  it("Deve exibir as colunas da tabela", () => {

    cy.contains("ID")
      .should("be.visible");

    cy.contains("Nome")
      .should("be.visible");

    cy.contains("Endereço")
      .should("be.visible");

    cy.contains("Email")
      .should("be.visible");

    cy.contains("Ações")
      .should("be.visible");

  });

  it("Deve exibir botão de novo usuário", () => {

    cy.get('[data-cy="btn-novo-usuario"]')
      .should("be.visible")
      .and("contain", "Novo Usuário");

  });

  it("Deve exibir botão editar para os usuários", () => {

    cy.get('[data-cy="btn-editar"]')
      .should("exist")
      .and("be.visible");

  });

  it("Deve exibir botão excluir para os usuários", () => {

    cy.get('[data-cy="btn-excluir"]')
      .should("exist")
      .and("be.visible");

  });

  it("Deve validar que os links de edição possuem ID dinâmico", () => {

    cy.get('[data-cy="btn-editar"]')
      .first()
      .should("have.attr", "href")
      .and("include", "id=");

  });

  it("Deve validar que os links de exclusão possuem ID dinâmico", () => {

    cy.get('[data-cy="btn-excluir"]')
      .first()
      .should("have.attr", "href")
      .and("include", "id=");

  });

});