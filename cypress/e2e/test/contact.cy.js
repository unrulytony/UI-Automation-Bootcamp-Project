import Authen from '../page/authentication.page'
import Contact from '../page/contact.page'
const { faker } = require('@faker-js/faker');

//Declare variables 
const fakeEmail = faker.internet.email();
const fakePassword = faker.internet.password();
describe('Contact', () => {
    beforeEach(() => {
      cy.visit('/')
    })
    it("Navigate to contact page", () => {
        
        cy.get("#signInOrRegister").click();
        //Login on to site.
        cy.origin(
        "https://dev-mlluudmotpwoldtv.us.auth0.com",
        { args: {} },
        ({}) => {
            
     
        });
        const fakeEmail = faker.internet.email();
        // const fakePassword = faker.internet.password();
    cy.get(Authen.SignUpTab).click();
    Authen.login(fakeEmail,'Password1')
    // Assertion
    cy.get("#product-0").should('be.visible')
    cy.get(Contact.contactBtn).should('be.visible').click({force: true})
    cy.get(Contact.hText).should('be.visible')
  });

  it("Successful message is send", () => {
        
    cy.get("#signInOrRegister").click();
    //Login on to site.
    cy.origin(
    "https://dev-mlluudmotpwoldtv.us.auth0.com",
    { args: {} },
    ({}) => {
        
 
    });
    const fakeEmail = faker.internet.email();
    // const fakePassword = faker.internet.password();
cy.get(Authen.SignUpTab).click();
Authen.login(fakeEmail,'Password1')
// Assertion
cy.get("#product-0").should('be.visible')
cy.get(Contact.contactBtn).should('be.visible').click({force: true})
cy.get(Contact.hText).should('be.visible')
Contact.contactInfor(faker.name.firstName(),faker.name.lastName(),fakeEmail,faker.random.word(),faker.random.word())
cy.get(Contact.messageSentNotification).should('be.visible').and('contain.text','Your message has been sent!')
})

it("Missing field ", () => {
        
    cy.get("#signInOrRegister").click();
    //Login on to site.
    cy.origin(
    "https://dev-mlluudmotpwoldtv.us.auth0.com",
    { args: {} },
    ({}) => {
        
 
    });
    const fakeEmail = faker.internet.email();
    // const fakePassword = faker.internet.password();
cy.get(Authen.SignUpTab).click();
Authen.login(fakeEmail,'Password1')
// Assertion
cy.get("#product-0").should('be.visible')
cy.get(Contact.contactBtn).should('be.visible').click({force: true})
cy.get(Contact.hText).should('be.visible')
Contact.contactInforNegative(faker.name.firstName(),faker.name.lastName(),fakeEmail,faker.random.word())
cy.get(Contact.messageSentNotification).should('not.exist')
})

})