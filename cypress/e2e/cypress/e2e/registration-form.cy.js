// registration_form.cy.js

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('DemoQA text Box - Current adress', () => {
   beforeEach(() => {
    cy.visit('https://demoqa.com/text-box');
    cy.wait(1000);
});

it('Filling in the Username field', () => {
    cy.get('#userName').type('TesterName');
});

it('Filling in the userEmail field', () => {
    const testEmail = 'testeremail2018@gmail.com';
    cy.get('#userEmail')
    .type(testEmail)
    .wait(500)
    .should('have.value', testEmail)
});

it('Filling in the currentAddress field', () => {
    const testAddress = '125 Wall street, Appartment 8';
    cy.get('#currentAddress')
    .type(testAddress)
    .wait(500)
    .should('have.value', testAddress)
});

it('Filling in the permanentAddress field', () => {
    const testPermanent = '327 Yellow street, Appartment 27';
    cy.get('#permanentAddress')
    .wait(500)
    .type(testPermanent)
    .should('have.value', testPermanent)
});

it('click on a submit button', () => {
    cy.get('#submit')
    .click()
});
})