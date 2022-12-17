import Authen from '../page/authentication.page'
import AddToCart from '../page/addToCart.page'
const { faker } = require('@faker-js/faker');

//Declare variables 
const fakeEmail = faker.internet.email();
const fakePassword = faker.internet.password();
describe('Add to cart', () => {
    beforeEach(() => {
      cy.visit('/')
    })
    it("Add item to Cart", () => {
        cy.get("#signInOrRegister").click();
        //Login on to site.
        cy.origin(
        "https://dev-mlluudmotpwoldtv.us.auth0.com",
        { args: {} },
        ({}) => {
            
     
        });
        cy.get(Authen.SignUpTab).click();
        Authen.login(fakeEmail,fakePassword)
        // Assertion
        cy.get("#product-0").should('be.visible')
        AddToCart.addToCart('Quality Mousepad')
        cy.get('section.snipcart-cart__content').should('be.visible')
      });

      it("Add multiple item to Cart", () => {
        cy.get("#signInOrRegister").click();
        //Login on to site.
        cy.origin(
        "https://dev-mlluudmotpwoldtv.us.auth0.com",
        { args: {} },
        ({}) => {
            
     
        });
        
        Authen.login('test1@tester.com','Password1')
        // Assertion
        cy.get("#product-0").should('be.visible')
        AddToCart.addToCart('Quality Mousepad')
        cy.get('section.snipcart-cart__content').should('be.visible')
        cy.get('.snipcart-cart-header__close-button').click()
        AddToCart.addToCart('Quality Fitted Hat')
        cy.get('section.snipcart-cart__content').should('be.visible')
      });

      it("Increase item quantity and add to Cart", () => {
        cy.get("#signInOrRegister").click();
        //Login on to site.
        cy.origin(
        "https://dev-mlluudmotpwoldtv.us.auth0.com",
        { args: {} },
        ({}) => {
            
     
        });
        Authen.login('test1@tester.com','Password1')
        // Assertion
        cy.get("#product-0").should('be.visible')
        AddToCart.increaseQuantity('2')
        AddToCart.addToCart('Quality Mousepad')
        cy.get('section.snipcart-cart__content').should('be.visible')
        cy.get('div .snipcart-item-quantity__quantity').should('be.visible').and('contain.text',2)
      });
    })
