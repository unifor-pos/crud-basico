describe("Usuários", () => {
  it("O sistema deve cadastrar um novo usuário", () => {
    cy.visit("http://localhost:8080");

    cy.contains("Usuários").click();

    cy.contains("Cadastrar").click();

    cy.get('input[name="nome"]').type("Isaac Medeiros");

    cy.get('input[name="email"]').type("isaac.medeiros@example.com");
    cy.get('input[data-cy-endereco="endereco"]').type("Rua A, 272");

    cy.get('input[name="senha"]').type("123123");

    cy.contains("Enviar").click();

    cy.contains("Novo usuario cadastrado com sucesso!").should("be.visible");
  });

  it("O sistema deve listar os usuários", () => {
    cy.visit("http://localhost:8080");
    cy.contains("Usuários").click();
    cy.contains("Listar usuários").click();

    cy.contains("Isaac Medeiros").should("be.visible");
  });
});

