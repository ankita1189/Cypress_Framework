describe('Seventh Automation', ()=>{
    it('Handling new Window', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // can be done using remove target or grab the target attr value and using jquery method and hit the url.

        cy.get('#openwindow').then(function(e1){
            const url = e1.prop('href')
            cy.visit(url) // only subdomains are allowed. if the main domian changes cypress will not accept this visit function and fail
        })

    })
})