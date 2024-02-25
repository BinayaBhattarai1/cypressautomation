const csv = require('neat-csv');
import logindata3 from "../fixtures/logindata3.json";
import logindatacase from "../fixtures/logindatacase.json"
// describe('Sixth Session', () => {
//       logindatacase.forEach((user)=>{
//         it(user.case, () => {
//         cy.visit('http://172.31.1.20:9999/#/')

//             cy.get('.ng-pristine').eq(1).should('exist');
            
//             cy.get('.ng-pristine').eq(1).type(user.username);
        
//             cy.get('.input-group > .form-control');
//             cy.get('.input-group > .form-control').type(user.password);

//             cy.get('.btn-primary').click();
//            })
        
          
//         })
//         // it('Test Cases for Login=>Single Json Data', () => {
//     //     cy.visit('http://172.31.1.20:9999/#/')

//     //     cy.fixture('logindata').then(user =>{

        
//     //         cy.get('.form-control').eq(0).type(user.username);
        
     
//     //         cy.get('.form-control').eq(1).type(user.password);
     
     
//     //         cy.get('.btn-primary').click();
//     //     })
//     // });
   
//     // logindatacase.forEach((user)=>{
//     //     it('Multiple Login', () => {
//     //     cy.visit('http://172.31.1.20:9999/#/')

   
      

//     //         cy.get('.ng-pristine').eq(1).should('exist');
            
//     //         cy.get('.ng-pristine').eq(1).type(user.username);
        
//     //         cy.get('.input-group > .form-control');
//     //         cy.get('.input-group > .form-control').type(user.password);

//     //         cy.get('.btn-primary').click();
//     //        })
        
          
//         // })
//     })
    describe('Dynamic Test Cases', () => {
        
      userData.forEach((userData) =>{
        it(userData, () => {
            // Read from csv file
                cy.fixture('logindata.csv')
                  .then(csv)
                  .then((userData) =>{
        cy.visit('http://172.31.1.20:9999/#/auth/login');
        cy.get('.ng-pristine').eq(1).type(userData.username);
        cy.get('.input-group > .form-control').type(userData.password);
        cy.get('.btn-primary').click();
                });
              });
             });
            });
            // describe('Adding assertions in fixtures', () => {
            //   logindata3.forEach(user =>{
            //     it(user.case, () => {
            //       cy.visit('http://172.31.1.20:9999/#/auth/login');
            //       cy.get('.ng-pristine').eq(1).type(user.username);
            //       cy.get('.input-group > .form-control').type(user.password);
            //       cy.get('.btn-primary').click();
            //       cy.get(user.locator).should('contain',user.expectedOutcome)
            //     });
            //   })
            // });
         
      