class FilterSort{

    get sortOptions() {return('#sort')}
    get category(){return('#category')}
    get resetBtn() {return('#reset')}

    get itemName() {return("p[class='chakra-text css-1n64n71']")}
    get itemCategory() {return("span[class='css-1ccau2i']")}
    get itemPrice() {return(" div[class='chakra-stack css-1ieohnc'] p[class='chakra-text css-0']")}    

    selectSort(sort){
        cy.get(this.sortOptions).select(sort)
    }
    selectCategory(category){
        cy.get(this.category).select(category)
    }
}
export default new FilterSort()