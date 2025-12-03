import { basetextBox } from "./base.textBox.js";
class TextBoxPage extends basetextBox {
  get name() { return cy.get("#userName"); }
  get email() { return cy.get("#userEmail"); }
  get current() { return cy.get("#currentAddress"); }
  get permanent() { return cy.get("#permanentAddress"); }
  get submit() { return cy.get("#submit"); }
  get output() { return cy.get("#output"); }

fillFullForm(name, email, currentAddress, permanentAddress) {
        this.name.type(name);
        this.email.type(email);
        this.current.type(currentAddress);
        this.permanent.type(permanentAddress);
    }
}  


export default new TextBoxPage();