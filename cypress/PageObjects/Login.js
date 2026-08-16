class Login {
    setUserName(username){
        cy.get("#user-name").type(username);
    }
    setPassword(password){
        cy.get("#password").type(password);
    }
    clickLogin(){
        cy.get("#login-button").click();
    }
    getErrorMessage(){
        return cy.get('[data-test="error"]');
    }
}

export default Login;