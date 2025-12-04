class TextBoxPage {

    userNameInput = '#userName';
    userEmailInput = '#userEmail';
    currentAddressTextarea = '#currentAddress';
    permanentAddressTextarea = '#permanentAddress';
    submitButton = '#submit';


    outputSection = '#output';
    outputName = '#name';
    outputEmail = '#email';
    outputCurrentAddress = '#currentAddress'; 
    outputPermanentAddress = '#permanentAddress';

    visit() {
        cy.visit('https://demoqa.com/text-box');
    }

    fillForm(userData) {
        cy.get(this.userNameInput).type(userData.name);
        cy.get(this.userEmailInput).type(userData.email);
        cy.get(this.currentAddressTextarea).type(userData.currentAddress);
        cy.get(this.permanentAddressTextarea).type(userData.permanentAddress);
    }

    submit() {
        cy.get(this.submitButton).click();
    }

    verifyOutput(userData) {
        cy.get(this.outputSection).should('be.visible');

        cy.get(this.outputName).should('have.text', `Name:${userData.name}`);
        cy.get(this.outputEmail).should('have.text', `Email:${userData.email}`);
        
        cy.get(this.outputCurrentAddress).should('contain', userData.currentAddress);
        cy.get(this.outputPermanentAddress).should('contain', userData.permanentAddress);
    }
checkOutputSectionDoesNotExist() {
        cy.get(this.outputSection).should('not.exist');
}
checkEmailInputHasError() {
        cy.get(this.userEmailInput).should('have.class', 'field-error');
    }
}

export default new TextBoxPage();