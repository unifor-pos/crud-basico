describe('Listar todos os usuarios cadastrados', () => {

    it('Teste se é possivel listar todos os usuarios cadastrados', () => {

        cy.visit('http://localhost:8080');

        cy.contains('Usuários').click();

        cy.contains('Listar usuários').click();

        cy.get('table tr').should("be.visible");
    })
});