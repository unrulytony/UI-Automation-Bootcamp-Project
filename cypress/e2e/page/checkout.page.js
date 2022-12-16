

class Checkout{
    get fullNameInput(){return("[name='name']")}
    get emailInput(){return("[name='email']")}
    get streetInput(){return("fieldset:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)")}
    get aptInput(){return("[name='address2']")}
    get cityInput(){return("[name='city']")}
    get zipInput(){return("[name='postalCode']")}
    get countryInput(){return("#country_951514dc-fbbc-4d25-937c-9ff9e997d100")}
    get stateInput(){return("#province_951514dc-fbbc-4d25-937c-9ff9e997d100")}
//     cy.get('.snipcart-typeahead input').eq(0).type('United States{enter}',{force: true} )
// cy.get('.snipcart-typeahead input').eq(1).type('Alabama',{force: true})
    get editOrderBtn(){return('button.snipcart-button-link')}
    //get continPayBtn(){return("button[type='submit']")}
    get continPayBtn(){return(".snipcart-base-button__label")}
    get payOrderBtn(){return(".snipcart-button-primary")}
    get invoiceText(){return(".snipcart-order__invoice-number")}
    get requiredEmailMessage(){return("div[data-for='email']")}
    get editBilling(){return(".snipcart-billing-completed__header.snipcart__box--header button[type='button']")}

    billingInfo(name,email,address,apt,city,country,state,zip){
        cy.get(this.fullNameInput).type(name)
        cy.get(this.emailInput).type(email)
        cy.get(this.streetInput).type(address)
        cy.get(this.aptInput).type(apt)
        cy.get(this.cityInput).type(city)
        //cy.get(this.countryInput).type(country)
        //cy.get(this.stateInput).type(state)
        cy.get('.snipcart-typeahead input').eq(0).type(country,{force: true} )
        cy.get('.snipcart-typeahead input').eq(1).type(state,{force: true})
        cy.get(this.zipInput).type(zip)
       
    }
    billingInfoForNegative(name,address,apt,city,country,state,zip){
        cy.get(this.fullNameInput).type(name)
        //cy.get(this.emailInput).type(email)
        cy.get(this.streetInput).type(address)
        cy.get(this.aptInput).type(apt)
        cy.get(this.cityInput).type(city)
        //cy.get(this.countryInput).type(country)
        //cy.get(this.stateInput).type(state)
        cy.get('.snipcart-typeahead input').eq(0).type(country,{force: true} )
        cy.get('.snipcart-typeahead input').eq(1).type(state,{force: true})
        cy.get(this.zipInput).type(zip)
       
    }
}
export default new Checkout()