import{TextBoxPage} from "../pageObjects/TextBoxPage.js";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('DemoQA Text Box - Form Submission with POM', () => {    
    const userData = {
            name: 'Eugene Tester',
            email: 'tester.eugene@cypr.com',
            currentAddress: '125 Wall street, Appartment 8',
            permanentAddress: '327 Yellow street, Appartment 27'
        };
beforeEach(() => {
        TextBoxPage.open(); 
    });

    it('filling out the entire form', () => {
        const { name, email, currentAddress, permanentAddress } = userData;
        TextBoxPage.fillFullForm(name, email, currentAddress, permanentAddress);
        TextBoxPage.submitButton.click();

        cy.get('#output').should('be.visible');
        cy.get('#name').should('have.text', `Name:${name}`);
        cy.get('#email').should('have.text', `Email:${email}`);
        cy.get('p[id="currentAddress"]').should('contain', currentAddress);
        cy.get('p[id="permanentAddress"]').should('contain', permanentAddress);
});
});