class Cart{

    //get removeItemBtns(){ return(`[title='Remove item']`)}
    get removeItemBtns(){ return(`.snipcart-button-icon.is-danger`)}
    //get firstItem(){ return(`(//button[@title='Remove item'])[2]`)}
    get cartList(){ return('.snipcart-item-list')}
    get firstItemRemoveBtn() { return ('.snipcart-item-list li:nth-child(1) button[title="Remove item"]')}
    get emptyCartMessage() { return ('.snipcart-empty-cart')}
    get inceaseQuantityBtn() { return (".snipcart-item-list li:nth-child(1) button[title= 'Increment quantity']")}
    get quantityNumber() { return ('.snipcart-item-list li:nth-child(1) span')}
    get cartBtn() { return('#top-cart span svg')}
    get checkoutBtn() { return('.snipcart-button-primary')}

    removeItem(itemnum){
        let removeItemBtn = `.snipcart-item-list li:nth-child(${this.applySelectorFormat(itemnum)}) button[title="Remove item"]`
        cy.wait(1500)
        cy.get(removeItemBtn).should('be.visible').click()
    }
    applySelectorFormat(itemName){
        return itemName
    }
}   
export default new Cart()