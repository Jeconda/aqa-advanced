Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('DemoQA text Box - Current adress', () => {
   beforeEach(() => {
    cy.visit('https://demoqa.com/text-box');
    cy.wait(1000);
});

it('filling out the entire form', () => {
    const userData = {
            name: 'Eugene Tester',
            email: 'tester.eugene@cypr.com',
            currentAddress: '125 Wall street, Appartment 8',
            permanentAddress: '327 Yellow street, Appartment 27'
        };
    
        const {name, email, currentAddress, permanentAddress} = userData;
        
        cy.get('#userName').type(name);
        cy.get('#userEmail').type(email);
        cy.get('#currentAddress').type(currentAddress);
        cy.get('#permanentAddress').type(permanentAddress);
        cy.get('#submit')
    .click()

        cy.get('#output').should('be.visible');
        cy.get('#name').should('have.text', `Name:${name}`);
        cy.get('#email').should('have.text', `Email:${email}`);
        cy.get('p[id="currentAddress"]').should('contain', currentAddress);
        cy.get('p[id="permanentAddress"]').should('contain', permanentAddress);
        
});
});