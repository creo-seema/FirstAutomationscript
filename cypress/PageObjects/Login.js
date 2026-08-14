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
}
export default Login;