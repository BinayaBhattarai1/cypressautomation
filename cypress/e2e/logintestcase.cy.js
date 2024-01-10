describe("Login Test Cases",()=>{
    beforeEach("Initial Condition",()=>{

        cy.visit("/#/auth/login");
        cy.get('input[name="username"]').as('Username');
        cy.get('input[name="password"]').as('password');
});

it("The url should include the pathname for required page",()=>{
        
    cy.url().should("include","/#/auth/login");                      //Assert URL
})

it('should have username, password fields, and a login button', () => {
    // Assert the existence of username and password fields
    cy.get('.ng-pristine').eq(1).should('exist');
    cy.get('.ng-pristine').eq(2).should('exist');

    // Assert the existence of the login button and its class
    cy.get('.btn-primary').should('exist');
  });

it("Invalid Username and  valid password",()=>{
    cy.get('@Username').type('nagarrik');
    cy.get('@password').type('nagarik');
    cy.get('.btn-primary').click();
    cy.intercept('GET', 'http://172.31.1.20/gateway/webApi/initData/banking')
    cy.get('.toast-bottom-right').should('contain',' Username or password wrong');
    cy.wait(2000)
  })

  it("Invalid Username and   valid password",()=>{
    cy.get('@Username').type('nagarrik');
    cy.get('@password').type('nagarik');
    cy.get('.btn-primary').click();
    cy.get('.toast-bottom-right').should('contain',' Username or password wrong');
    cy.wait(2000)
  })

  it('Invalid credentials',()=>{
    cy.get('.ng-pristine').eq(1).type('nagariik',{delay:200});
    cy.get('.form-control').eq(1).type('nagariik',{delay:200});
    cy.get('.btn-primary').should("be.visible");
    cy.get('.btn-primary').click();
    cy.get('.toast-bottom-right').should('contain',' Username or password wrong')
    cy.wait(2000)
});

it('Should be logged in',()=>{
    cy.get('.ng-pristine').eq(1).type('nagarik',{delay:200});
    cy.get('.form-control').eq(1).type('nagarik',{delay:200});
    cy.wait(2000)
    cy.get('.btn-primary').should("be.visible");
    cy.get('.btn-primary').click();
    cy.url().should("include","/#/mDabali/dashboard"); 
});

after(() => {
    cy.get('.ic-triangle-down').click();
    cy.wait(2000)
    cy.get('.dropdown-item').eq(2).click();  
    cy.wait(2000)   //Logout
    cy.url().should("include","/#/auth/login");
});
});