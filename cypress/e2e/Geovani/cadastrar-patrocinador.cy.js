describe('Cadastrar patrocinador', () => {
  it('should create a new patrocinador', () => {
    cy.visit('http://localhost:8080/admin/patrocinadores/cadastrar')

    cy.contains('Cadastrar Patrocinador').should('be.visible')

    cy.get('input[placeholder="Nome completo"]')
      .type('Patrocinador Teste')

    cy.get('textarea[placeholder="Breve descrição sobre o patrocinador"]')
      .type('Empresa patrocinadora do evento.')

    cy.get('input[placeholder="Patrocinador Ouro"]')
      .type('Patrocinador Ouro')

    cy.get('input[placeholder="https://exemplo.com/foto.jpg"]')
      .type('https://exemplo.com/logo.jpg')

    cy.get('input[placeholder="https://facebook.com/exemplo"]')
      .type('https://facebook.com/patrocinador-teste')

    cy.get('input[placeholder="https://instagram.com/exemplo"]')
      .type('https://instagram.com/patrocinador-teste')

    cy.get('input[placeholder="https://website.com/exemplo"]')
      .type('https://patrocinador-teste.com')

    cy.contains('Cadastrar').click()

    cy.contains('Patrocinador Teste').should('be.visible')
  })
})