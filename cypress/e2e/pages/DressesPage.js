/// <reference types="Cypress" />

export default class DressesPage{

    // verify dresses page load    
    VerfiyDressesPageLoad(){
        cy.title().should('contain','Dresses - My Store')
        cy.contains('h2','Dresses').should('be.visible')
    }

}

