import Authen from '../page/authentication.page'
import ProductGallery from '../page/productGallery.page'
import FilterSort from '../page/filterSort.page';
import ProductData from '../data/product.data';
const { faker } = require('@faker-js/faker');

//Declare variables 
const fakeEmail = faker.internet.email();
//const fakePassword = faker.internet.password();
describe('Contact', () => {
    beforeEach(() => {
      cy.visit('/')
    })
    it("Sort A to Z", () => {
        
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
    FilterSort.selectSort(ProductData.sort['A to Z'])
    // Assertion
    cy.get("#product-0").should('be.visible')

     // Sort data list based on name, from A to Z
     ProductData.products.sort()

     cy.get(FilterSort.itemName).each(($elem, index) => {
         expect($elem.text()).equal(ProductData.products[index].name)
     })
    })

    it("Filter by category ", () => {
        
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
    FilterSort.selectCategory(ProductData.category['Shirts'])
    // Assertion
    cy.get("#product-0").should('be.visible')

     // Sort data list based on name, from A to Z
     ProductData.products.sort()

     cy.get(FilterSort.itemCategory).each(($elem, index) => {
         expect($elem.text()).contain(ProductData.products[index].category)
     })
    })

    it("High to Low ", () => {
        
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
    FilterSort.selectSort(ProductData.sort['High to Low'])
    // Assertion
    cy.get("#product-0").should('be.visible')

     // Sort data list based on price, from high to low
     ProductData.products.sort((a, b) => b.price / a.price)

     cy.get(FilterSort.itemPrice).each(($elem, index) => {
         expect($elem.text()).equal(`$${ProductData.products[index].price}`)
     })

    })
})