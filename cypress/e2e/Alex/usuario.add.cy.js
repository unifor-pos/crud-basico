const { before } = require("mocha");

describe("Teste cadastrar usuario", () => {

  it('Deve cadastrar usuário com sucesso', () => {
    
    cy.visit("http://localhost:8080")

    cy.contains("Usuários").click()
    cy.contains("Cadastrar usuário").click()

    cy.get('input[data-cy="name"]').type("Alex")
    cy.get('input[data-cy="endereco"]').type("Rua 01, nº 123")
    cy.get('input[data-cy="email"]').type("alex@example.com")
    cy.get('input[data-cy="senha"]').type("123456")  })
})
