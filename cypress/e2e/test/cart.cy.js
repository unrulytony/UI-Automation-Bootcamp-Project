import Authen from '../page/authentication.page'
import AddToCart from '../page/addToCart.page'
import Cart from '../page/cart.page'

describe('Add to cart', () => {
    beforeEach(() => {
      cy.visit('/')
    })
    it("Remove item from cart", () => {
    
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
        Cart.removeItem('1')
        cy.get(Cart.emptyCartMessage).should('be.visible').and('contain.text','Your cart is empty')
      });

      it("Increase quantity of item in cart", () => {
        
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

        cy.get(Cart.inceaseQuantityBtn).click()
        cy.get(Cart.quantityNumber).should('be.visible').and('have.text',2)
      });

      it("Checkout button should not be displayed in empty cart", () => {
        
        cy.get("#signInOrRegister").click();
        //Login on to site.
        cy.origin(
        "https://dev-mlluudmotpwoldtv.us.auth0.com",
        { args: {} },
        ({}) => {
            
     
        });
        //cy.get(Authen.SignUpTab).click();
        Authen.login('test1@tester.com','Password1')
        // Assertion
        cy.get("#product-0").should('be.visible')
      
        //Use cy.wait(3500) for cart button to load properly to be clickable
        cy.wait(3500)
        cy.get(Cart.cartBtn).should('be.visible').click({force: true})
        cy.wait(1500)
        cy.get(Cart.emptyCartMessage).should('be.visible')
        //Assertion for negative test
        cy.get(Cart.checkoutBtn).should('not.exist')
      });

    });