Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('DemoQA radio Button - check all selections', () => {
   beforeEach(() => {
    cy.visit('https://demoqa.com/radio-button');
    cy.wait(1000);
});

it('check "Yes" selection', () => {
    cy.get('#yesRadio')
    .check({force: true});
    cy.get('#yesRadio').should('be.checked');
    cy.get('#impressiveRadio')
    .should('not.be.checked');
    cy.get('.text-success')
    .should('have.text', 'Yes');
});
it('check "impressive" selection', () => {
     cy.get('#impressiveRadio')
    .check({force: true});
    cy.get('#impressiveRadio').should('be.checked');
    cy.get('#yesRadio')
    .should('not.be.checked');
    cy.get('.text-success')
    .should('have.text', 'Impressive');
});

it('check "No" selection', () => {
    cy.get('#noRadio')
    .should('be.disabled')
    .click({force: true});
    cy.get('.text-success')
    .should('not.exist');
});
});