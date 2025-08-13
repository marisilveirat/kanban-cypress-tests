Cypress.Commands.add('visitKanban', () => {
  cy.visit('https://kanban-dusky-five.vercel.app/');
});

Cypress.Commands.add('toggleDarkMode', () => {
  cy.get('.react-switch-bg').click();
});

Cypress.Commands.add('clickAddList', () => {
  cy.contains('div.custom-input p', 'Adicionar outra lista').click();
});

