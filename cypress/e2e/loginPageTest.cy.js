import { positive_test_cases, negative_test_cases } from "../fixtures/loginPageFixtures.json"
import LoginPage from '../pageObjects/loginPage'
import InventoryPage from '../pageObjects/inventoryPage'


describe('Login tests', () => {
    const loginPage = new LoginPage()
    const inventoryPage = new InventoryPage()

    positive_test_cases.forEach(({ test_name, username, pass }) => {
        it(test_name, () => {
            // Given
            loginPage.visit()

            // When
            loginPage.usernameInput.type(username)
            loginPage.passwordInput.type(pass)
            loginPage.loginButton.click()

            // Then
            cy.url().should('eq', inventoryPage.url)
            inventoryPage.inventoryContainer.should('be.visible')
        })
    })

    negative_test_cases.forEach(({ test_name, username, pass, expected_error }) => {
        it(test_name, () => {
            // Given
            loginPage.visit()

            // When
            loginPage.usernameInput.type(username)
            loginPage.passwordInput.type(pass)
            loginPage.loginButton.click()

            // Then
            cy.url().should('eq', loginPage.url)
            loginPage.loginError.should('have.value', expected_error)
        })

    })
});
