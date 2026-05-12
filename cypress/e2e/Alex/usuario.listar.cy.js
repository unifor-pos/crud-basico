describe("Teste listar usuários", () => {

  it("Deve listar usuários cadastrados", () => {

    cy.visit("http://localhost:8080");
    
    cy.contains("Usuários").click();
    cy.contains("Listar usuários").click();

    cy.get("table tbody tr").should("have.length.greaterThan", 0);
  });
});
