describe('Cadastrar palestrante', () => {
  it('should create a new palestrante', () => {

    cy.visit('http://localhost:8080/admin/palestrantes/cadastrar')

    cy.contains('Cadastrar Palestrante').should('be.visible')

    cy.get('input[placeholder="Nome completo"]')
      .type('João Silva')

    cy.get('input[placeholder="email@exemplo.com"]')
      .type('joao.silva@email.com')

    cy.get('input[placeholder="Ex: Desenvolvimento Web, Data Science"]')
      .type('Desenvolvimento Web')

    cy.get('input[placeholder="https://exemplo.com/foto.jpg"]')
      .type('https://exemplo.com/foto.jpg')

    cy.get('textarea[placeholder="Breve descrição sobre o palestrante"]')
      .type('Palestrante com experiência em tecnologia.')

    cy.contains('Cadastrar').click()

  })
})