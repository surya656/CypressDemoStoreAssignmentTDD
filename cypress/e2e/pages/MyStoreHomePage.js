/// <reference types="Cypress" />

export default class MyStoreHomePage{

    // verify my store page load
    VerifyMyStoreHomePageLoad(){
        cy.url().should('contain','automationpractice.com/index.php')
        cy.title().should('contain','My Store')
        cy.get('a[title="My Store"]').scrollIntoView().should('be.visible')
    }

    // get details of product i.e productname,product price
    GetDetailsOfProduct(locatorText,aliasText){
        cy.get(`${locatorText}`).first().scrollIntoView()// 
        .invoke('text').as(aliasText)
    }
    
    // add 1st product to cart and verify added successfully to cart
    ClickOnAddToCartButton(productName,productNameeAlias,productPrice,productPriceAlias){
        cy.contains('span','Add to cart').first().scrollIntoView().should('be.visible').click().then(()=>{
            cy.get('span[class="cross"]').scrollIntoView().should('be.visible').then( ()=> {
            cy.contains('h2','Product successfully added to your shopping cart').scrollIntoView().should('be.visible')
                this.VerifyProductDetailsAddedInCart(productName,productNameeAlias)
                this.VerifyProductDetailsAddedInCart(productPrice,productPriceAlias)
                cy.get('a[title="Proceed to checkout"]').scrollIntoView().should('be.visible').click()
            })
            
        })
    }

    // verify product details added in cart i.e productname,product price
    VerifyProductDetailsAddedInCart(fieldLocator,fieldNameAlias){    
               cy.get(`@${fieldNameAlias}`).then(fieldText =>{
                cy.log(fieldText)
                cy.get('span[class="cross"]').scrollIntoView().should('be.visible')
                cy.get(fieldLocator).invoke('text').then(fieldText=>{
                expect(fieldText).to.includes(fieldText)
            })
       })
    }

    // navigate to summer dresses page
    NavigateToSummerDressesPage(){
        cy.get('a[title="Women"]').trigger('mouseover').then(()=>{
            cy.get('a[title="Summer Dresses"]').first().click({force:true})
        })
    }
}

