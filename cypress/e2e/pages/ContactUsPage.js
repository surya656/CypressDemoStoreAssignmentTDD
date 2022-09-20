/// <reference types="Cypress" />

export default class ContactUsPage{

    // verify contact us page load
    VerfiyContactUsPageLoad(){
        cy.title().should('contain','Contact us - My Store')
        cy.contains('h1','Customer service - Contact us').should('be.visible')
    }

}

