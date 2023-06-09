class LoginPage {

    constructor() {
        this._usernameInput = () => cy.get('input[data-test="username"]');
        this._passInput = () => cy.get('input[data-test="password"]');
        this._loginButton = () => cy.get('input[data-test="login-button"]');
        this._loginError = () => cy.get('h3[data-test="error"]');
        this._uri = '/';
    }

    get usernameInput() {
        return this._usernameInput()
    }

    get passwordInput() {
        return this._passInput()
    }

    get loginButton() {
        return this._loginButton()
    }

    get loginError() {
        return this._loginError()
    }

    get url() {
        return Cypress.config('baseUrl') + this._uri
    }

    get uri() {
        return this._uri
    }

    visit() {
        cy.visit(this.url)
    }
}

export default LoginPage;