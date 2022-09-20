/// <reference types="Cypress" />

export default class AddressPage{

    // verify entered data i.e firstName,lastName,address,city,state,phone gets reflected in Delivery Address Section
    VerifyDeliveryAddress(firstName,lastName,address,city,state,phone){
        cy.get('ul#address_delivery').scrollIntoView().should('be.visible')
          .and('contain',firstName)
          .and('contain',lastName)
          .and('contain',address)
          .and('contain',city)
          .and('contain',state)
          .and('contain',phone)
    }

     // verify entered data i.e firstName,lastName,address,city,state,phone gets reflected in Delivery Address Section
    VerifyBillingAddress(firstName,lastName,address,city,state,phone){
        cy.get('ul#address_invoice').scrollIntoView().should('be.visible')
          .and('contain',firstName)
          .and('contain',lastName)
          .and('contain',address)
          .and('contain',city)
          .and('contain',state)
          .and('contain',phone)
    }

    // verify Address Page load
    VerifyAddressPage(){
        cy.contains('h1','Addresses').should('be.visible')
    }

    ClickOnProceedToCheckout(){
        cy.get('button[name="processAddress"]').click()
    }
}


