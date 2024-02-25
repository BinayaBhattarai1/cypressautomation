let orderID
let access_token
 
describe("CRUD Operation", () => {
 
    // it('Create', () => {
 
    //     cy.request({
    //         method: "POST",
    //         url: "https://simple-books-api.glitch.me/api-clients",
    //         body: {
    //             "clientName": "Binaya Bhattarai",
    //             "clientEmail": "bhattaraibinaya43@gmail.com"
    //         }
    //     }).then((response) => {
    //         expect(response.status).to.eq(201)
    //         Cypress.env('Token', response.body.accessToken)
    //         access_token = Cypress.env('Token')
    //         cy.log(access_token)
    //     })
    // });
 
    // it('Get Data', () => {
 
    //     cy.request({
    //         method: "GET",
    //         url: "https://simple-books-api.glitch.me/books?type=fiction",
    //     }).then((response) => {
    //         expect(response.status).to.eq(200)
    //         expect(response.body[1].name).to.eq("The Vanishing Half")
    //         expect(response.body[1].type).to.eq("fiction")
    //         const Fictionname = response.body[1].name
    //         cy.log(Fictionname)
    //     })
    // });
 
    // it('Order a book', () => {
    //     cy.request({
    //         method: "POST",
    //         url: "https://simple-books-api.glitch.me/orders",
    //         body: {
    //             "bookId": 1,
    //             "customerName": "Binaya"
    //         },
    //         headers: {
    //             "Authorization": "Bearer b7b15ac3028b8175479a7fc531b2a96a617e2af6476d5bb66495cb85e971eed4"
    //         }
    //     }).then((response) => {
    //         expect(response.status).to.eq(201);
    //         console.log(response)
    //         Cypress.env('order', response.body.orderId)
    //        orderID = Cypress.env('order')
    //         cy.log(orderID)
 
    //     });
    // });
 
    // it.only('Update', () => {
    //     const orderId = "TCdUy3LoqhzwLkXSIxQVZ";
     
    //     cy.request({
    //       method: "PATCH",
    //       url: "https://simple-books-api.glitch.me/orders/${orderId}",
    //       body: {
    //         "customerName": "Binaya Bhattarai"
    //       },
    //       headers: {
    //         "Authorization": "Bearer b7b15ac3028b8175479a7fc531b2a96a617e2af6476d5bb66495cb85e971eed4"
    //       }
    //     }).then((response) => {
    //       expect(response.status).to.eq(204);
    //     });
    //   });
    // })
 
    it('Delete', () => {
        cy.request({
            method: "DELETE",
            url: "https://simple-books-api.glitch.me/orders/:orderId?=TCdUy3LoqhzwLkXSIxQVZ";
            headers: {
                "Authorization": "Bearer b7b15ac3028b8175479a7fc531b2a96a617e2af6476d5bb66495cb85e971eed4"
            }
        }).then((response) => {
            expect(response.status).to.eq(204);
 
        });
    });
  })
 
 
// })
// describe('Cypress Fifth Session', () => {
//     before(() => {
//       cy.visit('http://172.31.1.20:9999/#/auth/login');
//     });

//   it.only('CRUD Operations', () => {
//     cy.request({
//        'method':'POST',
//        'url':'http://172.31.1.20/gateway/web-login',
//       //  headers: {
      
//       //   },
//     body: {
//       grant_type:'passsword',
//       username:'nagarik',
//       password:'nagarik',
//       user_type:'WEB'

//     },
//     }).then((response) =>{
//        console.log(response)
//       expect(response.status).to.eq(200);
//       Cypress.env('Token', response.body.data)
//       const AccessToken = Cypress.env('Token')
//        console.log(AccessToken)

//    expect(response.body.data.token_type).to.eq(bearer);
//    expect(response.body.data.scope).to.eq(readwrite);
//    });
// });

// it('CRUD Operations', () => {
//   cy.request({
//      method:'GET',
//      url:'pg.bittiyasewa.com:8070/mobileApi/api/get-accounts?language=1',
//      headers: {
//          'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBWZXJzaW9uIjoiVjMiLCJjbGllbnRJZCI6NTgsInVzZXJfbmFtZSI6Ijk4NDkyMTk4OTMiLCJpc0JhbmtpbmciOmZhbHNlLCJyb2xlcyI6W10sInVzZXJJZCI6NDY1LCJjYnNUeXBlIjoiSU5GSU5JVFkiLCJjbGllbnRfaWQiOiJjbGllbnRJZCIsImJyYW5jaENvZGUiOiIwMDEiLCJpc0NsaWVudEFkbWluIjpmYWxzZSwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTcwNzA4MDAyOCwiZGF0YWJhc2VJZCI6MzI1LCJqdGkiOiIwNWY1Yjk0OS1iMTU4LTQ5ODctOGIzOS1iMmI5ODBkOTBmMWIifQ.UiQWuh6MFIVfF6p9Qerb3qLiWT6yjoz1Xhn68quEQAfIHGTf_5a_wKbeNTELln19g-bWENHjoh0PP4rBKdWFjuwIZHVD3oSRFyDn2RbEkT_8OCAgd5r7UDyGerU8EwSBzSHvwwlDfsvZQVJ2mrm_vP-vStaYcbm3n22kwxYocSK4mT92PUKoHxPW-d0Jg00NEwOt2Mpp9Q7QoqpoeDjDSj6uh0VQ1K4fllHK269tv2qNnmyFKX3OJ1w2A3O6R7HCknehTi5ObnsfxCgDc_JbbgoMfLyWWIMx1KDPDvAW7-sg5UpLDrZ3QaqHiPMSgYP2yimFaDroNteEGVXwdAYZeg'
      
     


//   },

//   }).then((response) => {
//     console.log(response)
//          expect(response.status).to.eq(200);

//     Cypress.env('Token', response.body.data)
//     const AccessToken = Cypress.env('Token')
//     console.log(AccessToken)

//     // expect(response.status).to.eq(200);
//     // expect(response.body.data.token_type).to.eq(bearer);
//     // expect(response.body.data.scope).to.eq(readwrite);
// });
// });


// });
