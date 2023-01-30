describe('Fake API Test',()=>{
    it('Fake API Test', ()=>{
cy.visit('https://rahulshettyacademy.com/angularAppdemo')

        cy.intercept({
            method:'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },{
            statusCode: 200,
            body: [
                {book_name: "Rest Assured With Java", 
                isbn: "SPY40", 
                aisle: "2529857"}
            ]
        }).as('bookRetrivals')

        cy.get("button[class='btn btn-primary']").click()
        cy.wait('@bookRetrivals').should(({request,response})=>{
            cy.get('tr').should('have.length', response.body.length+1)
            response.body.length
        })
        cy.get('p').should('have.text','Oops only 1 Book available')

        //length of response array = rows of table
    })
})