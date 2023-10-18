describe('Reqres API Testing - Create User', ()=>{
    it('Create User', ()=>{
        cy.request({
            method:'POST',
            url:'https://reqres.in/api/users',
            body : {
                "name" : "Rayhan Rahman",
                "job" : "Quality Assurance"
            }
        }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).has.property("name", "Rayhan Rahman")
        })
    })
})