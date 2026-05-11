describe('teste listar usuários', () => {

  it('deve listar usuários', () => {
    cy.visit('http://localhost:8080')
    
    cy.contains('Usuários').click()
    cy.contains('Listar').click()
  
  })
})