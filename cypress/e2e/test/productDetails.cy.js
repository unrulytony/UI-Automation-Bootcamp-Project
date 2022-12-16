import Authen from '../page/authentication.page'
import AddToCart from '../page/addToCart.page'
import productDetails from '../page/productDetails.page'
import productGallery from '../page/productGallery.page'


describe('Product Details', () => {
    beforeEach(() => {
      cy.visit('/')
    })

it("Navigate to alternate image of item", () => {
    
    cy.get("#signInOrRegister").click();
    //Login on to site.
    cy.origin(
    "https://dev-mlluudmotpwoldtv.us.auth0.com",
    { args: {} },
    ({}) => {})
    Authen.login('test1@tester.com','Password1')
    // Assertion
    cy.wait(3000)
    cy.get(productDetails.firstProdImage).should('be.visible').click()
    cy.get(productDetails.altImage).should('be.visible').click()
    cy.get(productDetails.altImageText).should('be.visible')
    })

    it("Add to cart from product details", () => {
    
        cy.get("#signInOrRegister").click();
        //Login on to site.
        cy.origin(
        "https://dev-mlluudmotpwoldtv.us.auth0.com",
        { args: {} },
        ({}) => {})
        Authen.login('test1@tester.com','Password1')
        // Assertion
        cy.wait(3000)
        cy.get(productDetails.firstProdImage).should('be.visible').click()
        cy.get(productDetails.altImage).should('be.visible').click()
        cy.get(productDetails.altImageText).should('be.visible')
        AddToCart.addToCart('Quality Fitted Hat')
        
        cy.get('section.snipcart-cart__content').should('be.visible')
        })

        it("Navigate back to products gallery home page", () => {
    
            cy.get("#signInOrRegister").click();
            //Login on to site.
            cy.origin(
            "https://dev-mlluudmotpwoldtv.us.auth0.com",
            { args: {} },
            ({}) => {})
            Authen.login('test1@tester.com','Password1')
            // Assertion
            cy.wait(3000)
            cy.get(productDetails.firstProdImage).should('be.visible').click()
            cy.get(productDetails.altImage).should('be.visible').click()
            cy.get(productDetails.altImageText).should('be.visible')
            cy.get(productDetails.backToProdBtn).should('be.visible').click()
            cy.get(productGallery.productList).should('exist')
            })
})