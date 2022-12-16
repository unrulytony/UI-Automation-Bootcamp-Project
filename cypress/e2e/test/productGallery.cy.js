import Authen from '../page/authentication.page'
import ProductGallery from '../page/productGallery.page'

describe('Product Gallery', () => {
    beforeEach(() => {
      cy.visit('/')
    })
    it("Product list is displayed", () => {
    
        cy.get("#signInOrRegister").click();
        //Login on to site.
        cy.origin(
        "https://dev-mlluudmotpwoldtv.us.auth0.com",
        { args: {} },
        ({}) => {
            
     
        });
        Authen.login('test1@tester.com','Password1')
        // Assertion
        cy.get(ProductGallery.productList).should('be.visible').and('to.exist')
         });

         it("Navigate to Sign Out from Home page", () => {
    
            cy.get("#signInOrRegister").click();
            //Login on to site.
            cy.origin(
            "https://dev-mlluudmotpwoldtv.us.auth0.com",
            { args: {} },
            ({}) => {})
            Authen.login('test1@tester.com','Password1')
            // Assertion
            cy.get(ProductGallery.signoutBtn).should('be.visible').click()
            cy.url().should('eq', 'https://ui-automation-camp.vercel.app/')
        })

        it("Find text in on Home page", () => {
    
            cy.get("#signInOrRegister").click();
            //Login on to site.
            cy.origin(
            "https://dev-mlluudmotpwoldtv.us.auth0.com",
            { args: {} },
            ({}) => {})
            Authen.login('test1@tester.com','Password1')
            // Assertion
            cy.wait(3000)
           cy.get(productGallery.shopNowH2).should('be.visible').and('contain.text','Shop Now')
        })
    })