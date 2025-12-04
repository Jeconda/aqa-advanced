import TextBoxPage from '../../support/pages/TextBoxPage';

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

const testUsers = [
{
        scenario: '1. Valid Submission',
        name: 'Eugene Tester',
        email: 'tester.eugene@cypr.com',
        currentAddress: '125 Wall street, Appartment 8',
        permanentAddress: '327 Yellow street, Appartment 27',
        shouldSubmit: true,
    },
    {
        scenario: '2. Invalid Email Test',
        name: '12345',
        email: 'tester.eugenecypr.com',
        currentAddress: 'Test Current Address',
        permanentAddress: 'Test Permanent Address',
        shouldSubmit: false,
    },
    {
        scenario: '3. Missing Permanent Address',
        name: 'Address Tester',
        email: 'address@test.com',
        currentAddress: 'Current Address Only',
        permanentAddress: '', 
        shouldSubmit: true,
    }
];

describe('DemoQA Text Box Scenario (Parameterized)', () => {
   beforeEach(() => {
    TextBoxPage.visit();
});

testUsers.forEach((userData) => {
it(`Test Case: ${userData.scenario}`, () => {
    
    TextBoxPage.fillForm(userData);
    TextBoxPage.submit();

    if (userData.shouldSubmit) {
    TextBoxPage.verifyOutput(userData);
    if (userData.scenario === '3. Missing Permanent Address') {
            cy.get(TextBoxPage.outputPermanentAddress).should('have.text', 'Permanent Address :');
            }   
    } else {
    TextBoxPage.checkOutputSectionDoesNotExist(); 
    TextBoxPage.checkEmailInputHasError();
}
});
});
});









// cy.visit('https://demoqa.com/text-box');
//   cy.wait(1000);


//const {name, email, currentAddress, permanentAddress} = userData;
        
       // cy.get('#userName').type(name);
       // cy.get('#userEmail').type(email);
       // cy.get('#currentAddress').type(currentAddress);
       // cy.get('#permanentAddress').type(permanentAddress);
       // cy.get('#submit')
   // .click()

      //  cy.get('#output').should('be.visible');
      //  cy.get('#name').should('have.text', `Name:${name}`);
      //  cy.get('#email').should('have.text', `Email:${email}`);
      //  cy.get('p[id="currentAddress"]').should('contain', currentAddress);
      //  cy.get('p[id="permanentAddress"]').should('contain', permanentAddress)