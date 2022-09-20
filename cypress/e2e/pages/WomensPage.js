/// <reference types="Cypress" />

export default class WomensPage{

    // verify womens page load
    VerfiyWomensPageLoad(){
        cy.title().should('contain','Women - My Store')
        cy.contains('h2','Women').should('be.visible')
    }
}

