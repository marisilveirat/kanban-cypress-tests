Cypress.Commands.add('visitKanban', () => {
  cy.visit('https://kanban-dusky-five.vercel.app/', { failOnStatusCode: false });
});

Cypress.Commands.add('toggleDarkMode', () => {
  cy.get('.react-switch-bg').click();
});

Cypress.Commands.add('clickAddList', () => {
  cy.contains('div.custom-input p', 'Adicionar outra lista').click();
});

Cypress.Commands.add('UXReview', () => {
  return cy.contains('p', 'UX Review').should('exist');
});


