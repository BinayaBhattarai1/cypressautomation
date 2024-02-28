const csv = require('neat-csv');
import logindata3 from "../fixtures/logindata3.json";
import logindatacase from "../fixtures/logindatacase.json"



describe('Dynamic Test Cases', () => {
  let excelData
      beforeEach(() => {
        cy.visit('http://172.31.1.20:9999/#/auth/login');
          cy.fixture('logindata.csv')
          .then(csv)
          .then((data) => {
            excelData = data
      });

    excelData.forEach((userData) => {
      it('Use of then', () => {
          cy.get('.ng-pristine').eq(1).type(userData.username);
          cy.get('.input-group > .form-control').type(userData.password);
          cy.get('.btn-primary').click();

        });

  });
});
});

let regData
describe('CSV file logindata', () => {
  beforeEach(() => {
    cy.fixture('logindata.csv')
      .then(csv)
      .then((data) => {
        regData = data
      })
  })
  it('Uses of then', () => {
    for (let i = 0; i < regData.length; i++) {
      cy.visit("http://172.31.1.20:9999/#/auth/login")
      cy.get('.ng-pristine').eq(1).type(regData[i]['username'])
      cy.get('.input-group > .form-control').type(regData[i]['password'])

    }

  })

})

//Case I : By using json file (logindata.json) from fixtures
describe('Single Json Data', () => {
  it('Test Cases for Login', () => {
    cy.visit('http://172.31.1.20:9999/#/')

    cy.fixture('logindata').then(user => {

      cy.get('.form-control').eq(0).type(user.username);
      cy.get('.form-control').eq(1).type(user.password);
      cy.get('.btn-primary').click();

    })
  });
});


// with Case
describe('Sixth Session', () => {
  logindatacase.forEach((user) => {
    it(user.case, () => {
      cy.visit('http://172.31.1.20:9999/#/')

      cy.get('.ng-pristine').eq(1).should('exist');

      cy.get('.ng-pristine').eq(1).type(user.username);

      cy.get('.input-group > .form-control');
      cy.get('.input-group > .form-control').type(user.password);

      cy.get('.btn-primary').click();
    })
  })
})

describe('Multiple Login', () => {
  logindatacase.forEach((user) => {
    it('Multiple Login', () => {
      cy.visit('http://172.31.1.20:9999/#/')
      cy.get('.ng-pristine').eq(1).should('exist');

      cy.get('.ng-pristine').eq(1).type(user.username);

      cy.get('.input-group > .form-control');
      cy.get('.input-group > .form-control').type(user.password);

      cy.get('.btn-primary').click();
    })
  })
});


describe('Adding assertions in fixtures', () => {
  logindata3.forEach(user => {
    it(user.case, () => {
      cy.visit('http://172.31.1.20:9999/#/auth/login');
      cy.get('.ng-pristine').eq(1).type(user.username);
      cy.get('.input-group > .form-control').type(user.password);
      cy.get('.btn-primary').click();
      cy.get(user.locator).should('contain', user.expectedOutcome)
    });
  })
});

