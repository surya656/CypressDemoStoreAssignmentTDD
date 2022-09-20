/// <reference types="Cypress" />

export default class LoginPage{

    // verify login page load
    VerfiyLoginPagePageLoad(){
        cy.title().should('contain','Login - My Store')
        cy.contains('h3','Create an account').should('be.visible')
    }

}

