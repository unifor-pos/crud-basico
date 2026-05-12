describe('Teste de Usuário', () => {

  it('Deve cadastrar um usuário', () => {

    cy.visit("http://localhost:8080");
    
    cy.contains("Usuários").click();
    
    cy.contains("Cadastrar").click();
        
    cy.get('input[name="nome"], input[id="nome"], input[placeholder*="Nome"]')
      .type('Luca Esposito', { force: true });
            
    cy.get('input[name="email"], input[id="email"], input[placeholder*="Email"]')
      .type('luca.esposito@example.com', { force: true });
            
    cy.get('input[name="senha"], input[id="senha"], input[placeholder*="Senha"]')
      .type('senha123', { force: true });
            
    cy.get('button[type="submit"], button')
      .contains('Enviar')
      .click();
            
    cy.contains("Novo usuario cadastrado com sucesso!")
      .should("be.visible");

  });

  it('Deve excluir o usuário Luca Esposito', () => {

    cy.visit('http://localhost:8080/admin/usuarios/listar');

    cy.on('window:confirm', () => true);

    cy.contains('td', 'Luca Esposito')
      .parents('tr')
      .within(() => {
        cy.contains('Excluir').click();
      });

    cy.url().should('include', 'excluir');

  });

});