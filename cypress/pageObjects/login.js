class login {
    elements = 
    {
        usernameInput : ()=> cy.get('input[name="username"]'),
        passwordInput : ()=> cy.get('input[name="password"]'),
        loginBtn      : ()=> cy.get('button[type="submit"]'),
        successText   :()=> cy.get('h1'),
        errorText     :()=> cy.get("# toast-container")
    }


    enterUsername(username)
    {
        this.elements.usernameInput().clear();
        this.elements.usernameInput().type(username);
    }
 
    enterPassword(password)
    {
        this.elements.passwordInput().clear();
        this.elements.passwordInput().type(password);
    }
   
    clickSubmit() {
        this.elements.loginBtn().click();
    }
    fakeUsername(fakeId)
    {
        this.elements.usernameInput().clear();
        this.elements.usernameInput().type(fakeId);
    }
 
}
export default login;