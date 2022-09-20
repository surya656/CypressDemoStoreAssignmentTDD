/// <reference types="Cypress" />

export default class TshirtsPage{

    VerfiyTshirtsPageLoad(){
        cy.title().should('contain','T-shirts - My Store')
        cy.get('span[class="category-name"]').should('contain','T-shirts')

    }

}

