describe('teste cadastrar usuário', () => {

  it('deve cadastrar usuário', () => {

    cy.visit('http://localhost:8080')

    cy.contains('Usuários').click()
    cy.contains('Cadastrar').click()

    cy.get('input[data-cy="nome"]').type('Gab')
    cy.get('input[data-cy="endereco"]').type('Rua Alencar, 312')
    cy.get('input[data-cy="email"]').type('gab@email.com')
    cy.get('input[data-cy="senha"]').type('123456')

    cy.get('[data-cy="enviar"]').should('be.visible').click()

  })

})