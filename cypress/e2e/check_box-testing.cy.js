Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('DemoQA checkbox - check all selections', () => {
   beforeEach(() => {
    cy.visit('https://demoqa.com/checkbox');
    cy.wait(1000);
});

it('selecting the "Home" flag and checking all child elements', () => {
    cy.get('[title="Expand all"]')
    .click()
    cy.get('[title="Collapse all"]')
    .should('exist');
    cy.get('#tree-node-home')
    .click()
    .should('be.checked')
    cy.get('#result')
    .should('be.visible');
    cy.get('.text-success')
    .should('contain', 'desktop')
    .should('contain', 'downloads')
    cy.get('#tree-node-react')
    .should('be.checked')
    cy.get('[title="Collapse all"]')
    .click()
    cy.get('[title="Expand all"]')
    .should('exist')
});
});