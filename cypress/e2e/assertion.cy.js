describe('Assertion Types',()=>{
    beforeEach("Initial Condition",()=>{
        cy.visit("/#/auth/login");
    })
   
    it("The url should include the pathname for required page",()=>{
        
        cy.url().should("include","/#/auth/login");                      //using include
    })

    it("Should navigate to the correct URL",()=>{
        
        cy.url().should("eq","http://172.31.1.20:9999/#/auth/login");    //using eq
    })

    it("Should navigate to the correct URL with base URL",()=>{
      
        cy.url().should("eq",Cypress.config().baseUrl+"/#/auth/login");  //using eq 
    })

    it("Existence assertion",()=>{
       
        cy.get(".font-weight-normal").should("exist");                   //using exist to assert class
        cy.get(".font-bold").should("exist");
    })

    it("Chain assertion to check text",()=>{
        
        cy.get(".font-bold").eq(1).should("exist").and("have.text","Login");      //using chain assertion
    })

    it("Using Find",()=>{
    
        cy.get('.container-fluid').find('.font-bold').eq(1).should('exist');    //using find
    })

    it("Assert class",()=>{
        cy.get('.small').eq(0).should('have.class', 'small');                  //Asserting class
    })

    // it("Should have length",()=>{
    //     cy.get('.text-navy-40').eq(1).should('have.length',8);                   //Length Assertion
    // })

    // it("Using Contain",()=>{
    //     cy.get('np').should('contain','ADD TO CART');
    // })
   
})