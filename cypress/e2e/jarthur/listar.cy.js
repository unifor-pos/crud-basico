describe('Na pagina de listar usuários', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/admin/usuarios/listar');
    })

    it('Verifica se botao Novo Usuário esta habilitado', () => {
        cy.contains('Listar Usuários').should('be.visible');
        cy.get('a[href="/admin/usuarios/cadastrar"]').should('be.visible');
    })
    it('Verifica se botão Novo Usuário redireciona para Cadastro de Usuário', () => {
        cy.get('a.btn.btn-primary').click();
        cy.url().should('include', '/admin/usuarios/cadastrar');
    })
    it('Verifica se apresenta Nome do Usuário', () => {
        cy.get('tbody tr').eq(0).should('contain', 'xxxx');
    })
});