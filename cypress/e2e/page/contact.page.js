class Contact{
    get Fname(){return('#firstName')}
    get Lname(){return('#lastName')}
    get email(){return('#email')}
    get subject(){return('#subject')}
    get message(){return('#message')}
    get sendMessageBtn(){return('.chakra-button.css-vs0e4t')}
    get contactBtn(){return('#top-contact')}
    get hText(){return('.chakra-heading.css-z59od')}
    get fieldIsMiss(){return(`div[id='field-:ri:-feedback']`)}
    get messageSentNotification(){return('#toast-1')}

    contactInfor(fname,lname,email,subject,message){
        cy.get(this.Fname).type(fname)
        cy.get(this.Lname).type(lname)
        cy.get(this.email).type(email)
        cy.get(this.subject).type(subject)
        cy.get(this.message).type(message)
        cy.get(this.sendMessageBtn).should('be.visible').click({force: true})
        
    }

    contactInforNegative(fname,lname,email,subject){
        cy.get(this.Fname).type(fname)
        cy.get(this.Lname).type(lname)
        cy.get(this.email).type(email)
        cy.get(this.subject).type(subject)
        //cy.get(this.message).type(message)
        cy.get(this.sendMessageBtn).should('be.visible').click({force: true})
        
    }
}
export default new Contact()