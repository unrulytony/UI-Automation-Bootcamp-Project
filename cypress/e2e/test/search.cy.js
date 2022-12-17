import Authen from '../page/authentication.page'
import FilterSort from '../page/filterSort.page';
import Search from '../page/search.page';
const { faker } = require('@faker-js/faker');

//Declare variables 
const fakeEmail = faker.internet.email();
describe('Contact', () => {
    beforeEach(() => {
      cy.visit('/')
    })
    it("Invalid search", () => {
        
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
    cy.get(Search.searchInput).should('be.visible').type('food')
    cy.get(FilterSort.itemName).should('not.exist')
   
    })

    it("Valid search", () => {
        
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
    cy.get(Search.searchInput).should('be.visible').type('pants')
    cy.get(FilterSort.itemCategory).should('exist').and('contain.text','pants')
    })

    it("Valid search then reset filters", () => {
        
        cy.get("#signInOrRegister").click();
        //Login on to site.
        cy.origin(
        "https://dev-mlluudmotpwoldtv.us.auth0.com",
        { args: {} },
        ({}) => {
            
     
        });
        const fakeEmail = faker.internet.email();
    cy.get(Authen.SignUpTab).click();
    Authen.login(fakeEmail,'Password1')
    // Assertion
    cy.get("#product-0").should('be.visible')
    cy.get(Search.searchInput).should('be.visible').type('hat')
    cy.get(FilterSort.itemCategory).should('contain.text','hat')
    cy.get(FilterSort.resetBtn).click()
    cy.get(FilterSort.itemCategory).should('be.visible')
    cy.get(Search.searchInput).should('be.empty')
    })
})