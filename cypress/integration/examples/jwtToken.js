const neatCSV = require('neat-csv')

let productName
describe('JWT Token', ()=>{
    it('Is logged in through local storage',()=>{
        cy.LoginAPI().then(async function(){
            cy.visit('https://rahulshettyacademy.com/client/',{
                onBeforeLoad : function(window){
                    window.localStorage.setItem('token',Cypress.env('token'))
                }
            })
        })

        productName = cy.get('.card-body b').eq(1).then(function(ele){
            ele.text();
        })
        cy.get('.card-body button:last-of-type').eq(1).click();
        cy.get('[routerLink*="cart"]').click();
        cy.contains('Checkout').click()
        cy.get('[placeholder*="Country"]').type('ind')
        cy.get('.ta-results button').each((el,index,list)=>{
            if(el.text() === ' India'){
                cy.wrap(el).click()
            }

        })
        cy.get('.action__submit').click()
        cy.wait(2000)

        cy.get('.order-summary button').click()

        // Cypress.config('fileServerFolder') // gives the path of the project
        cy.readFile(Cypress.config('fileServerFolder')+'file\cypress\downloads\order-invoice_ankitashrivastava1189.csv').
        then(async (text)=>{
            const CSV = await  neatCSV(text)
            console.log(CSV)
            const actualProductCSV = CSV[0]["Product Name"]
            expect(productName).to.equal(actualProductCSV)
        })
        



    })
})