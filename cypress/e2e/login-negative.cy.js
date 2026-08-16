import Login from "../PageObjects/Login";

describe('Login - Negative Scenarios', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    });

    it('shows error for invalid username', () => {
        const ln = new Login();
        ln.setUserName("invalid_user");
        ln.setPassword("secret_sauce");
        ln.clickLogin();
        ln.getErrorMessage().should('contain.text', 'Username and password do not match');
    });

    it('shows error for invalid password', () => {
        const ln = new Login();
        ln.setUserName("standard_user");
        ln.setPassword("wrong_password");
        ln.clickLogin();
        ln.getErrorMessage().should('contain.text', 'Username and password do not match');
    });

    it('shows error for locked out user', () => {
        const ln = new Login();
        ln.setUserName("locked_out_user");
        ln.setPassword("secret_sauce");
        ln.clickLogin();
        ln.getErrorMessage().should('contain.text', 'locked out');
    });

    it('shows error for empty credentials', () => {
        const ln = new Login();
        ln.clickLogin();
        ln.getErrorMessage().should('contain.text', 'Username is required');
    });
});