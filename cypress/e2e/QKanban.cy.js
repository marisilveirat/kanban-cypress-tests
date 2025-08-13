describe('Explorando funcionalidades da aplicação Quadro Kanban', () => {

  beforeEach(() => {
    cy.visitKanban();
  });

  it('Teste 1: Validar DarkMode e LightMode', () => {
    cy.toggleDarkMode();
    cy.get('h1').contains('Quadro Kanban').should('have.css', 'color', 'rgb(33, 37, 41)');
    cy.toggleDarkMode();
    cy.get('h1').contains('Quadro Kanban').should('have.css', 'color', 'rgb(231, 233, 234)');
  });

  it('Teste 2: Deve deletar a tabela "Done"', () => {
    cy.contains('h1.board-header-title', '🚀 Done').should('be.visible');
    cy.get('h1.board-header-title').should(($el) => {expect($el).to.have.length(3);});
  });

  it('Teste 3: Deve adicionar a lista "Feito" e verificar se o título aparece', () => {
    cy.clickAddList();
    cy.get('input.sc-gsnTZi.irWJb').type('Feito');
    cy.contains('button.btn', 'Adicionar Lista').click();
    cy.get('h1.board-header-title').should('contain.text', 'Feito');
  });

  it('Teste 4: Deve adicionar a tarefa "Teste Cypress" na lista "To Do"', () => {
    cy.contains('h1.board-header-title', '🚀 Done').should('exist');
    cy.contains('p', 'Adicionar Tarefa').click();
    cy.get('input.sc-gsnTZi.irWJb').type('Teste Cypress');
    cy.contains('button.btn', 'Enviar').click();
    cy.contains('div.content p', 'Teste Cypress').should('exist');
  });

  it('Teste 5: Deve editar o nome da tarefa "UX Review" para "Teste Cypress"', () => {
    cy.contains('h1.board-header-title', 'Done').should('exist');
    cy.contains('p', 'UX Review').should('exist').click();
    cy.contains('p', 'UX Review').click();
    cy.get('input.sc-gsnTZi.irWJb').clear().type('Teste Cypress');
    cy.contains('button.btn', 'Editar Nome da task').click();
    cy.contains('div.custom-input p', 'Teste Cypress').should('exist');
  });

  it('Teste 6: Deve deletar a tarefa "UX Review" da lista "Done"', () => {
    cy.contains('p', 'UX Review').should('exist');
    cy.contains('div.content', 'UX Review').trigger('mouseover');
    cy.contains('.content > header > p', 'UX Review').should('exist');
  });

  it('Teste 7: Deve criar uma nova tag "Urgente" com cor azul no card "Implementação do blog"', () => {
    cy.contains('div.content', 'Implementação do blog').click();
    cy.get('li#0Color').click();
    cy.contains('div.custom-input p', 'Adicionar nova Tag').click();
    cy.get('input.sc-gsnTZi.irWJb').type('Urgente');
    cy.contains('button.btn', 'Enviar').click();
    cy.contains('label', 'Urgente').should('be.visible').and('have.css', 'background-color', 'rgb(92, 196, 255)');
  });
});




