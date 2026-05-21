describe('Testar o fluxo de cadastro de usuario', () => {
    it('Teste se é possivel cadastrar um novo usuario', () => {

        cy.visit('http://localhost:8080');

        cy.contains('Usuários').click();

        cy.contains('Cadastrar usuário').click();

        cy.get('input[name="nome"]').type("Teste");

        cy.get('input[data-cy-endereco="endereco"]').type("Rua 128, N 500");

        cy.get('input[name="email"]').type("matheus@gmail.com");

        cy.get('input[name="senha"]').type("12345");

        cy.contains('Enviar').click();

    })
});