import loginPage from '../../pageobjects/loginPage'
describe('Login', ()=>{
beforeEach(function(){
    cy.visit('172.31.1.20:9999');
});

it('Verify Unsuccessful Login',()=>{
const loginObj = new loginPage();
loginObj.enterUsername('nagarik')
loginObj.enterPassword('qa@123')
loginObj.clickSubmit();
loginObj.elements.errorTxt().should('contain','Enter your userName and password correct');
});

it('Verify Login successful', () => {
    const loginObj = new loginPage();
    loginObj.enterUsername('nagarik')
    loginObj.enterPassword('nagarik')
    loginObj.clickSubmit();
    loginObj.elements.successTxt().should('have.text','Login Successfully');
  });
});