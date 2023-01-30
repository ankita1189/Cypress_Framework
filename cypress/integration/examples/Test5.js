describe('Fifth Automation', ()=>{
    it('Handling dynamic webtables', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //handling dynamic web tables

        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text()
            if(text.includes('Python')){
                //navigate to next sibling in cypress
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
                {
                    const priceText = price.text()
                    expect(priceText).equal('25')
                })
                
            }
        })

    })
})