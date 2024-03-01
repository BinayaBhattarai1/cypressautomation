// const formData= new FormData();
// formData.append("grant_type","password");
// formData.append("username","nagarik");
// formData.append("password","nagarik");
// formData.append("user_type","WEB");

// describe('CRUD Operation', () => {
//     it('Create', () => {
//         cy.visit('http://172.31.1.20/#/auth/login'),
//         cy.request({
//             method: "POST",
//             url: "http://172.31.1.20:8070/web-login",
//             body: formData,
//             headers: {
//                 'Content-Type': 'multipart/form-data',
//             }
//         }).then((response) => {
//             console.log("response: ",response)
//             expect(response.status).to.eq(200)
//             Cypress.env('Token', response.body.data.access_token)
//             const accessToken = Cypress.env('Token')
//             cy.log(accessToken)
//         })
//     })
// })
describe('API GET REQUEST', () => {
    it('POST ', () => {
        cy.request({
            method: "POST",
            url: 'https://reqres.in/api/users',
            body: {
                name: "Binaya Bhattarai",
                job: "QA",
            }
        }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.name).to.eq('Binaya Bhattarai')
            expect(response.body.job).to.eq('QA')
        })
    });
});

it('get users', () => {
    cy.request({
        method: "GET",
        url: "https://reqres.in/api/users/2",
    }).then((response) => {
        console.log(response)
        Cypress.env('firstname', response.body.data.first_name)
        const firstName = Cypress.env('firstname')
        cy.log(firstName)
    })
})


it('POST Request', () => {
    const firstName = Cypress.env('fName ')
    cy.request({
        method: "POST ",
        url: 'https://reqres.in/api/users',
        body: {
            "name": firstName,
            "job": "QA ",
        }
    })
        .then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.name).to.eq('Janet')
            expect(response.body.job).to.eq('QA')
        })
});

let fullname;
it('get users', () => {
    cy.request({
        method: "GET",
        url: "https://reqres.in/api/users/2",
    }).then((response) => {
        console.log(response)
        Cypress.env('fName', response.body.data.first_name)
        fullname = Cypress.env('fName')
        cy.log(fullname)
    })
})

