class Authenication {
    get userName() { return ('[type="email"]')}
    get password() { return ('[type="password')}
    get submitBtn() { return ('[name=submit]')}
    get errorMessage() { return ('div.auth0-global-message-error')}
    get SignUpTab() { return ('li:nth-child(2)')}

    login(username, password) {
        cy.get(this.userName).type(username)
        cy.get(this.password).type(password,{ log: false })
        cy.get(this.submitBtn).click()
    }

}

export default new Authenication()