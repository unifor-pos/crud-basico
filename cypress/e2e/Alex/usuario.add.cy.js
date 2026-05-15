describe("Teste de cadastro de usuários", () => {

  beforeEach(() => {

    cy.visit("http://localhost:8080");

    cy.contains("Usuários").click();

    cy.contains("Cadastrar usuário").click();

  });

  it("Deve carregar a página de cadastro", () => {

    cy.get('[data-cy="titulo-cadastro"]')
      .should("be.visible")
      .and("contain", "Cadastrar usuário");

  });

  it("Deve exibir o formulário de cadastro", () => {

    cy.get('[data-cy="form-cadastro"]')
      .should("exist")
      .and("be.visible");

  });

  it("Deve exibir todos os campos do formulário", () => {

    cy.get('[data-cy="input-nome"]')
      .should("be.visible");

    cy.get('[data-cy="input-endereco"]')
      .should("be.visible");

    cy.get('[data-cy="input-email"]')
      .should("be.visible");

    cy.get('[data-cy="input-senha"]')
      .should("be.visible");

  });

  it("Deve permitir preencher os campos do formulário", () => {

    cy.get('[data-cy="input-nome"]')
      .type("Alex")
      .should("have.value", "Alex");

    cy.get('[data-cy="input-endereco"]')
      .type("Rua 01, nº 123")
      .should("have.value", "Rua 01, nº 123");

    cy.get('[data-cy="input-email"]')
      .type("alex@example.com")
      .should("have.value", "alex@example.com");

    cy.get('[data-cy="input-senha"]')
      .type("123456")
      .should("have.value", "123456");

  });

  it("Deve cadastrar usuário com sucesso", () => {

    cy.get('[data-cy="input-nome"]')
      .type("Alex");

    cy.get('[data-cy="input-endereco"]')
      .type("Rua 01, nº 123");

    cy.get('[data-cy="input-email"]')
      .type(`alex${Date.now()}@example.com`);

    cy.get('[data-cy="input-senha"]')
      .type("123456");

    cy.get('[data-cy="btn-enviar"]')
      .click();

    cy.contains("Novo usuario cadastrado com sucesso!")
      .should("be.visible");

  });

});