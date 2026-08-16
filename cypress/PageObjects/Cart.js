class Cart {
    verifyProductInCart(productName) {
        cy.get('.inventory_item_name').should('contain.text', productName);
    }

    goToCheckout() {
        cy.get('#checkout').click();
    }
}

export default Cart;