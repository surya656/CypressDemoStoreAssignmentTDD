## There are 4 spec files with test case respectively ##
1. verify-able-to-add-product-to-cart-and-checkout.spec.js
 - Should be able add product to cart and checkout
2. verify-able-to-navigate-multiple-pages-and-page-load.spec.js
 - Should be able Navigate to My Store Home and Verify page Load
 - Should be able Navigate to Contact Us page and Verify page Load
 - Should be able Navigate to Login page and Verify page Load
 - Should be able Navigate to Womens page and Verify page Load
 - Should be able Navigate to Dresses page and Verify page Load
 - Should be able Navigate to T-Shirts page and Verify page Load
3. verify-able-to-subscribe-newsletter.spec.js
 - Should be able to Subscribe to Newsletter
4. verify-filters-and-sorting.spec.js
 - Should be able apply Filters and Verify the results
 - Should be able apply Price Sorting and Verify the results


## Folder Structure (POM) ##
1. spec - It contains all spec files
2. pages - It contains all page files
3. Fixtures - Used to store data of test case
4. Support -  Used to create custom commands and add plugins

## How To Run Cypress ##
1. To Manually Run scripts on Cypress Runner
 - npx cypress open
 - Click on E2E configured
 - Click on spec file to run

2. To Run All Spec files through command line
 - npx cypress run  

3. To Run All Spec files in headed mode through command line
 - npm run test -- --headed

4. To Run All Spec files in headed mode on particular browser i.e chrome through command line
 - npm run test -- --browser chrome --headed

5. To Run All Spec files in headles mode on particular browser i.e chrome through command line
 - npm run test -- --browser chrome 

6. To Run All Spec files and generate reports through command line
 - npm run test --reporter mochawesome

7. To Run Specific files through through command line
 - npm run --spec {specFilePath} or
 - npx cypress run --spec {specFilePath} 


## Mochawesome Reporters are Implemented ##
 reports/hmtl - contains srceenshots,assests and html file
 
## How to check Script Report ##
index.html - copy path of file and paste in browser Url 
# CypressDemoStoreAssignment
