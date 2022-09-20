/// <reference types="Cypress" />

export default class SummerDressesPage{

    // verify summer dresses page load
    VerfiySummerDressesPageLoad(){
        cy.title().should('contain','Dresses - My Store')
        cy.contains('h2','Dresses').should('be.visible')
    }

    // apply sorting i.e Highest Price
    SelectSorting(option){
        cy.get('select#selectProductSort').select(option)
        cy.get('img[src="http://automationpractice.com/img/loader.gif"]').should('not.be.visible')
        cy.get('select#selectProductSort').should('contain',option)
    }

    // verify sorting result
    VerifyPriceSortingResult(){
        cy.get('img[src="http://automationpractice.com/img/loader.gif"]').should('not.be.visible')
        cy.get('span[itemprop="price"]').first().invoke('text').then( (fieldText) =>{
            cy.log(fieldText)
            const priceText =fieldText.split('$')
            cy.log(priceText[1])
            expect(parseFloat(priceText[1])).to.be.gte(30)
        })
    }

    // apply color filter i.e black
    CheckColorFilter(colorOption,colorOptionAlias,colorOptionLocator){
        cy.contains('a',colorOption).children('span').invoke('text').as(colorOptionAlias)
        cy.get(colorOptionLocator).click()
    }

    // verify color filter resullt
    VerifyColorFilterResult(colorOptionAlias){
        cy.get(`@${colorOptionAlias}`).then(fieldText =>{
            cy.log(fieldText)
            const count = fieldText.slice(0,-1).split('(')
            cy.log(count[1])
            cy.get('div.product-count').should('contain',`Showing 1 - ${count[1]} of ${count[1]} items`)
        })
    }
}

