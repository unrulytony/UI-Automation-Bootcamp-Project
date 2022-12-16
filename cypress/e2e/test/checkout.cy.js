import Authen from '../page/authentication.page'
import AddToCart from '../page/addToCart.page'
import Cart from '../page/cart.page'
import Checkout from '../page/checkout.page'
const { faker } = require('@faker-js/faker');

//Declare variables 
const fakeEmail = faker.internet.email();
const fakePassword = faker.internet.password();


describe('Checkout', () => {
    beforeEach(() => {
      cy.visit('/')
    })
    it("Successfullyy checkout flow", () => {
        //cy.visit("/");
        cy.get("#signInOrRegister").click();
        //Login on to site.
        cy.origin(
        "https://dev-mlluudmotpwoldtv.us.auth0.com",
        { args: {} },
        ({}) => {
            
     
        });
        cy.get(Authen.SignUpTab).click();
        Authen.login(fakeEmail,'Password1')
        // Assertion
        cy.get("#product-0").should('be.visible')
        AddToCart.addToCart('Quality Fitted Hat')
        cy.wait(4500)
        cy.get('section.snipcart-cart__content').should('be.visible')
        cy.get(Cart.checkoutBtn).should('be.visible').click()
        Checkout.billingInfo(faker.name.fullName(),fakeEmail,faker.address.streetAddress(),faker.address.buildingNumber(),faker.address.city(),faker.address.country(),faker.address.state(),faker.address.zipCode())
        cy.get(Checkout.continPayBtn).should('be.visible').and('contain.text','Continue to payment').click()
        cy.iframe('.snipcart-payment-card-form iframe').find('#card-number').type('4242 4242 4242 4242')
        cy.iframe('.snipcart-payment-card-form iframe').find('#cvv').type('123')
        cy.iframe('.snipcart-payment-card-form iframe').find('#cvv').type('07/28')
        cy.get(Checkout.payOrderBtn).should('exist').and('contain.text','Place order').click()
        cy.get(Checkout.invoiceText).should('exist').and('contain.text','Invoice number')
      });

      it("Missing field in billing information ", () => {
        //cy.visit("/");
        cy.get("#signInOrRegister").click();
        //Login on to site.
        cy.origin(
        "https://dev-mlluudmotpwoldtv.us.auth0.com",
        { args: {} },
        ({}) => {
            
     
        });
        //cy.get(Authen.SignUpTab).click();
        Authen.login(fakeEmail,'Password1')
        // Assertion
        cy.get("#product-0").should('be.visible')
        AddToCart.addToCart('Quality Fitted Hat')
        cy.wait(4500)
        cy.get('section.snipcart-cart__content').should('be.visible')
        cy.get(Cart.checkoutBtn).should('be.visible').click()
        Checkout.billingInfoForNegative(faker.name.fullName(),faker.address.streetAddress(),faker.address.buildingNumber(),faker.address.city(),faker.address.country(),faker.address.state(),faker.address.zipCode())
        cy.get(Checkout.continPayBtn).should('exist').and('contain.text','Continue to payment').click({force: true})
  
        cy.get(Checkout.requiredEmailMessage).should('be.visible').and('contain.text','This field is required')
        });

        it("Edit billing after continue to payment", () => {
            //cy.visit("/");
            cy.get("#signInOrRegister").click();
            //Login on to site.
            cy.origin(
            "https://dev-mlluudmotpwoldtv.us.auth0.com",
            { args: {} },
            ({}) => {
                
         
            });
            //cy.get(Authen.SignUpTab).click();
            Authen.login(fakeEmail,'Password1')
            // Assertion
            cy.get("#product-0").should('be.visible')
            AddToCart.addToCart('Quality Fitted Hat')
            cy.wait(4500)
            cy.get('section.snipcart-cart__content').should('be.visible')
            cy.get(Cart.checkoutBtn).should('be.visible').click()
            Checkout.billingInfo(faker.name.fullName(),fakeEmail,faker.address.streetAddress(),faker.address.buildingNumber(),faker.address.city(),faker.address.country(),faker.address.state(),faker.address.zipCode())
            cy.get(Checkout.continPayBtn).should('be.visible').and('contain.text','Continue to payment').click({force: true})
            cy.iframe('.snipcart-payment-card-form iframe').find('#card-number').type('4242 4242 4242 4242')
            cy.iframe('.snipcart-payment-card-form iframe').find('#cvv').type('123')
            cy.iframe('.snipcart-payment-card-form iframe').find('#cvv').type('07/28')
            cy.get(Checkout.editBilling).should('exist').click();
            cy.get(Checkout.emailInput).clear()
            cy.get(Checkout.emailInput).type('justaemail@myemail.com',{force:true}).and('have.value','justaemail@myemail.com')
            cy.get(Checkout.continPayBtn).should('be.visible').and('contain.text','Continue to payment').click({force:true})
            cy.iframe('.snipcart-payment-card-form iframe').find('#card-number').type('4242 4242 4242 4242')
            cy.iframe('.snipcart-payment-card-form iframe').find('#cvv').type('123')
            cy.iframe('.snipcart-payment-card-form iframe').find('#cvv').type('07/28')
            cy.get(Checkout.payOrderBtn).should('exist').and('contain.text','Place order').click()
            cy.get(Checkout.invoiceText).should('exist').and('contain.text','Invoice number')
          });

    })