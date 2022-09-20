/// <reference types="Cypress" />

import MyStoreHomePage from "../pages/MyStoreHomePage"
import NavigationPage from "../pages/NavigationPage"
import * as NewsletterTestData from "./verify-able-to-subscribe-newsletter.testdata"

describe('Subscribe to Newsletter',()=>{

    const myStoreHomePage = new MyStoreHomePage()
    const navigationPage  = new NavigationPage()

    it('Should be able to Subscribe to Newsletter',()=>{
        navigationPage.NavigateToMyStoreHomePage()
        myStoreHomePage.VerifyMyStoreHomePageLoad()
        cy.verifyPageHeaderLoad()
        cy.verifyPageFooterLoad()
        cy.subscribeToNewsLetter(NewsletterTestData.emailId)
        cy.verifySubscribeToNewsLetter()
    })
})