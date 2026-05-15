class UsuarioPage {
    elements = {
        btnMenuUsuarios: () => cy.get('[data-cy="menu-usuarios"]'),
        btnSubMenuCadastrar: () => cy.get('[data-cy="menu-usuarios-cadastrar"]'),
        btnSubMenuListar: () => cy.get('[data-cy="menu-usuarios-listar"]'),

        inputNome: () => cy.get('[data-cy="nome-input"]'),
        inputEndereco: () => cy.get('[data-cy="endereco-input"]'),
        inputEmail: () => cy.get('[data-cy="email-input"]'),
        inputSenha: () => cy.get('[data-cy="senha-input"]'),

        btnSalvar: () => cy.get('[data-cy="btn-salvar"]'),
        msgSucesso: () => cy.contains('Novo usuario cadastrado com sucesso!')
    }

    acessarPaginaCadastro() {
        cy.visit('http://localhost:8081');
        this.elements.btnMenuUsuarios().click();
        this.elements.btnSubMenuCadastrar().click();
    }

    acessarPaginaListagem() {
        cy.visit('http://localhost:8081');
        this.elements.btnMenuUsuarios().click();
        this.elements.btnSubMenuListar().click();
    }

    preencherCadastro(nome, endereco, email, senha) {
        if (nome) this.elements.inputNome().type(nome);
        if (endereco) this.elements.inputEndereco().type(endereco);
        if (email) this.elements.inputEmail().type(email);
        if (senha) this.elements.inputSenha().type(senha);
    }

    submeterCadastro() {
        this.elements.btnSalvar().click();
    }

    cadastrarNovoUsuario(nome, endereco, email, senha) {
        this.acessarPaginaCadastro();
        this.preencherCadastro(nome, endereco, email, senha);
        this.submeterCadastro();
        this.elements.msgSucesso().should('be.visible');
    }
}

export default new UsuarioPage();
