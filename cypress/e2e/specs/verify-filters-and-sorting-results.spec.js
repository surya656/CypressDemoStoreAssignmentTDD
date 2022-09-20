/// <reference types="Cypress" />

import MyStoreHomePage from "../pages/MyStoreHomePage"
import NavigationPage from "../pages/NavigationPage"
import SummerDressesPage from "../pages/SummerDressesPage"
import * as LocatorText from "../../support/locators"

describe('',()=>{

    const myStoreHomePage = new MyStoreHomePage()
    const navigationPage  = new NavigationPage()
    const summerDressesPage = new SummerDressesPage()

    before('Fetch Personal Details from fixture',function(){
        //using fixtures
        cy.fixture('personalInformation').then(function(data){
            globalThis.data = data
        })
    })

    it('Should be able apply Filters and Verify the results',()=>{
        navigationPage.NavigateToMyStoreHomePage()
        myStoreHomePage.VerifyMyStoreHomePageLoad()
        cy.verifyPageHeaderLoad()
        cy.verifyPageFooterLoad()
        myStoreHomePage.NavigateToSummerDressesPage()
        summerDressesPage.CheckColorFilter(globalThis.data.blackColor,LocatorText.blackColorAlias,LocatorText.blackColorLocator)
        summerDressesPage.VerifyColorFilterResult(LocatorText.blackColorAlias)
    })

    it('Should be able apply Price Sorting and Verify the results',()=>{
        navigationPage.NavigateToMyStoreHomePage()
        myStoreHomePage.VerifyMyStoreHomePageLoad()
        cy.verifyPageHeaderLoad()
        cy.verifyPageFooterLoad()
        myStoreHomePage.NavigateToSummerDressesPage()
        summerDressesPage.SelectSorting(globalThis.data.highestSort)
        summerDressesPage .VerifyPriceSortingResult()
    })
})