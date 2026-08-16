import Login from "../PageObjects/Login";
import Inventory from "../PageObjects/Inventory";

describe('Product Sorting', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        const ln = new Login();
        ln.setUserName("standard_user");
        ln.setPassword("secret_sauce");
        ln.clickLogin();
    });

    it('sorts products by price: high to low', () => {
        const inventory = new Inventory();
        inventory.sortProducts('hilo');

        inventory.getAllProductPrices().then(($prices) => {
            const prices = [...$prices].map(el =>
                parseFloat(el.innerText.replace('$', ''))
            );
            const sortedDesc = [...prices].sort((a, b) => b - a);
            expect(prices).to.deep.equal(sortedDesc);
        });
    });
});