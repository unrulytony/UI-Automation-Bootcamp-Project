import Authen from '../page/authentication.page'
const { faker } = require('@faker-js/faker');

//Declare variables 
const fakeEmail = faker.internet.email();
const fakePassword = faker.internet.password();
describe('Authentication', () => {
    beforeEach(() => {
      cy.visit('/')
    })
    it("SignUp to platform", () => {
        //cy.visit("/");
        cy.get("#signInOrRegister").click();
        //Login on to site.
        cy.origin(
        "https://dev-mlluudmotpwoldtv.us.auth0.com",
        { args: {} },
        ({}) => {
            
     
        });
        // const fakeEmail = faker.internet.email();
        // const fakePassword = faker.internet.password();
    cy.get(Authen.SignUpTab).click();
    Authen.login(fakeEmail,fakePassword)
    // Assertion
    cy.get("#product-0").should('be.visible')
  });

    it("Login to platform", () => {
       // cy.visit("/");
        cy.get("#signInOrRegister").click();
        //Login on to site.
        cy.origin(
        "https://dev-mlluudmotpwoldtv.us.auth0.com",
        { args: {} },
        ({}) => {
         
        }
    );
    Authen.login(fakeEmail,fakePassword)
     // Assertion
    cy.get("#product-0").should('be.visible')
  });

  it("Sign up with existing user to platform", () => {
    // cy.visit("/");
     cy.get("#signInOrRegister").click();
     //Login on to site.
     cy.origin(
     "https://dev-mlluudmotpwoldtv.us.auth0.com",
     { args: {} },
     ({}) => {
         
     }
 );
 cy.get(Authen.SignUpTab).click();
 Authen.login(fakeEmail,fakePassword)
  // Assertion
 cy.get(Authen.errorMessage).should('be.visible')
});
})