/// <reference types="Cypress" />

export default class SummaryPage{

    // verify summary page load
    VerifySummaryPageLoad(){
        cy.contains('h1','Shopping-cart summary').scrollIntoView().should('be.visible')
    }

    // click on Proceed to checkout button
    ClickOnProceedToCheckoutButton(){
        cy.get('a[title="Proceed to checkout"]').last().scrollIntoView().should('be.visible').click()
    }

    // veriy product detail i.e productname,productprice
    VerifyProductDetails(fieldLocator,fieldNameAlias){    
        cy.get(`@${fieldNameAlias}`).then(fieldText =>{
         cy.log(fieldText)
         cy.get(fieldLocator).invoke('text').then(fieldText=>{
          expect(fieldText).to.includes(fieldText)
        })
        })
    }
}


