describe('Fake API Test',()=>{
    it('Fake API Test', ()=>{
        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php',{
            name:'TestBook',
            isbn:'bdr',
            aisle:323,
            author:'Myself'
        }).then(function(response){
            expect(response.body).to.have.property('Msg','successfully added')
            expect(response.status).to.eq(200)

    })
    })
})