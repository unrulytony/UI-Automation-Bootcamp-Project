class AddToCart {

get addToCarBtns(){return('#add-to-cart')}
//get increaseBtns(){return('#product-0-increase')}

applySelectorFormat(itemName){
    return itemName
}

addToCart(itemName){
    let addToCartBtn = `[data-item-name= '${this.applySelectorFormat(itemName)}']`
    cy.get(addToCartBtn).scrollIntoView()
    cy.wait(1500)
    cy.get(addToCartBtn).should('be.visible').click({force: true})
    
    
}

increaseQuantity(productNum){

    let increaseBtn =` #product-${this.applySelectorFormat(productNum)}-increase`
    cy.get(increaseBtn).scrollIntoView()
    cy.wait(1500)
    cy.get(increaseBtn).should('be.visible').click()
}
}
export default new AddToCart()