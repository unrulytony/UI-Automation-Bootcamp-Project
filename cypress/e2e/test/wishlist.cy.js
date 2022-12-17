import Authen from '../page/authentication.page'
import FilterSort from '../page/filterSort.page';
import ProductData from '../data/product.data';
import wishlist from '../page/wishlist.page';


const { faker } = require('@faker-js/faker');

//Declare variables 
const fakeEmail = faker.internet.email();

describe('Wishlist/Favorite', () => {
    beforeEach(() => {
      cy.visit('/')
    })
    it("Navigate to favorite", () => {
        
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
     cy.get(wishlist.favoriteBtn).should('be.visible').click({force: true})
     cy.get(wishlist.favoriteText).should('be.visible').and('contain.text','Favorites')
    })

    it("Check if favorite page is empty", () => {
        
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
     cy.get(wishlist.favoriteBtn).should('be.visible').click({force: true})
     cy.get(wishlist.favoriteText).should('be.visible').and('contain.text','Favorites')

     cy.get(wishlist.favoriteEmpty).should('exist').and('contain.text','No favorites added!')

    })

    it("Adding to Favorite should display message", () => {
        
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
     cy.get(wishlist.favoriteBtn).should('be.visible').click({force: true})
     cy.get(wishlist.favoriteText).should('be.visible').and('contain.text','Favorites')

     cy.get(wishlist.favoriteEmpty).should('exist').and('contain.text','No favorites added!')
     cy.get('#top-home').click() 
     cy.get(wishlist.favariteIconFirstItem).should('be.visible').click()
     cy.get(wishlist.favaritemessage).should('be.visible')
     })
 
     it("Add to favorites then remove item from favorites", () => {
        
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
     cy.get(wishlist.favoriteBtn).should('be.visible').click({force: true})
     cy.get(wishlist.favoriteText).should('be.visible').and('contain.text','Favorites')

     cy.get(wishlist.favoriteEmpty).should('exist').and('contain.text','No favorites added!')
     cy.get('#top-home').click() 
     cy.get(wishlist.favariteIconFirstItem).should('be.visible').click()
     //cy.get(wishlist.favaritemessage).should('be.visible').contains('added to the favorites')
     cy.get(wishlist.favoriteBtn).should('be.visible').click({force: true})
     cy.get(wishlist.removefavorite).should('be.visible').click({force: true})
     cy.get(wishlist.favoriteEmpty).should('exist').and('contain.text','No favorites added!')
     })

     
     it("Verify Added product is in wishlist", () => {
        
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
     cy.get(wishlist.favoriteBtn).should('be.visible').click({force: true})
     cy.get(wishlist.favoriteText).should('be.visible').and('contain.text','Favorites')

     cy.get(wishlist.favoriteEmpty).should('exist').and('contain.text','No favorites added!')
     cy.get('#top-home').click() 
     cy.get(wishlist.favariteIconFirstItem).should('be.visible').click()
     cy.get(wishlist.favoriteBtn).should('be.visible').click({force: true})
     cy.get(wishlist.VerifyItem).should('be.visible')
     })


})