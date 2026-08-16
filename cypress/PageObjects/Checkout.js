class Checkout {
    enterInfo(firstName, lastName, postalCode) {
        cy.get('#first-name').type(firstName);
        cy.get('#last-name').type(lastName);
        cy.get('#postal-code').type(postalCode);
        cy.get('#continue').click();
    }

    clickContinue() {
        cy.get('#continue').click();
    }

    finishOrder() {
        cy.get('#finish').click();
    }

    verifyOrderComplete() {
        cy.get('.complete-header').should('have.text', 'Thank you for your order!');
    }

    getErrorMessage() {
        return cy.get('[data-test="error"]');
    }
}

export default Checkout;