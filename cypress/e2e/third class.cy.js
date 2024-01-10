describe('Third Lecture on Cypress', () => {
    beforeEach("Initial Condition",()=>{

        cy.visit("http://172.31.1.20/#/auth/login");
        cy.get('input[name="username"]').as('Username');
        cy.get('input[name="password"]').as('password');
});

    it('Network Intercept Wait', () => {
        cy.get('@Username').type('Admin');
        cy.get('@password').type('admin');
        cy.get('.btn-primary').click();
        cy.intercept("GET", '/gateway/webApi/dashboard/superAdmin').as("waitPage"); //Network Intercept Wait
        cy.wait("@waitPage");
        cy.get('.form-control').click({force: true});
        cy.get('.form-group-icon').type('Send Notification');
        cy.get('.ng-star-inserted').should('be.visible');
        cy.get('.ng-star-inserted').eq(2).click();
        cy.get('.btn-primary').click()
        cy.get('#userSelect').should('exist');
        cy.get('#userSelect').selectFile('cypress/fixtures/animal.webp',{force: true}); //File Upload
        cy.get('.ic-search').eq(1).click();
        cy.get('.pq-search-txt').eq(0).click();
        cy.get('.pq-search-txt').eq(0).type('535').type('{enter}');
        cy.get('.chekClient').eq(1).check();
        cy.get('.d-block').click();
        cy.get('.ng-pristine').eq(5).type('This is a testing notification');
        cy.get('.form-control').eq(6).should('exist');
        cy.get('.form-control').eq(6).type('Offer offer offer sunaulo offer');
        cy.wait(4000);
        cy.get('.btn-success').click();

     })
   
    })