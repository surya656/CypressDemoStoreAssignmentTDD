/// <reference types="Cypress" />

export default class PaymentPage{

    // verify payment page load
    VerifyPaymentsPage(){
        cy.contains('h1','Please choose your payment method').should('be.visible')
    }

    // verify product details i.e productname,productprice
    VerifyProductDetails(fieldNameAlias){    
        cy.get(`@${fieldNameAlias}`).then(fieldText =>{
         cy.log(fieldText)
         cy.get('td[class="cart_description"]').invoke('text').then(fieldText=>{
          expect(fieldText).to.includes(fieldText)
        })
        })
    }
}

