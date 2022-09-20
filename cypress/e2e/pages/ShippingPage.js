/// <reference types="Cypress" />

export default class ShippingPage{

    // click on terms of service
    ClickOnTermsOfService(){
        cy.get('input#cgv').check().should('be.checked')
    }

    // click on proceed to checkout button
    ClickOnProceedToCheckout(){
        cy.get('button[name="processCarrier"]').click()
    }

    // verify shipping page load
    VerifyShippingPage(){
        cy.contains('h1','Shipping').should('be.visible')
    }
}

