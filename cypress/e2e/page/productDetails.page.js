class ProductDetails{
    get ImageList(){return('.control-dots')}
    get backToProdBtn(){return('.chakra-stack.css-dpkrn2 svg')}
    get ItemDescr(){return('div:nth-child(2) > p:nth-child(2)')}
    get firstProdImage(){return('#product-0 .chakra-image.css-2i84d9')}
    get altImage(){return("li.dot[value='1']")}
    get altImageText(){return('li.slide.selected p.legend')}

}
export default new ProductDetails()