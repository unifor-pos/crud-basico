export function gerarUsuario() {
  const timestamp = Date.now();
  const random = Math.random().toString(36).slice(2, 8);

  return {
    nome: `Alexandre Test ${random}`,
    email: `amorlin.test.${timestamp}.${random}@example.com`,
    senha: 'Senha@123',
  };
}

export function abrirMenuUsuarios() {
  cy.get('.navbar-toggler').then(($btn) => {
    if ($btn.is(':visible')) cy.wrap($btn).click();
  });

  cy.contains('.nav-link', 'Usuários').click();
}

export const viewports = [
  { nome: 'desktop', aplicar: () => cy.viewport(1280, 800) },
  { nome: 'mobile (iPhone X)', aplicar: () => cy.viewport('iphone-x') },
];
