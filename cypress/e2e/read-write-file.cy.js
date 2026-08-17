describe('Read and Write File Scenario', () => {

    it('should read credentials and login successfully', () => {

        cy.visit('https://rahulshettyacademy.com/loginpagePractise/')

        cy.readFile('cypress/test-data/loginCredentials.json')
            .then((credentials) => {

                cy.log(credentials.username)

                cy.get('#username')
                    .type(credentials.username)

                cy.get('#password')
                    .type(credentials.password)

                cy.get('#signInBtn').click();
                 cy.writeFile('cypress/file-results/login-result.json', {
            username: credentials.username,
            status: 'Login Successful'
        })

            })

    })

})