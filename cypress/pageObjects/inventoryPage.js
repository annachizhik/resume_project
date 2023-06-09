class InventoryPage {

    constructor() {
        this._inventoryContainer = () => cy.get('[id="inventory_container"]');
        this._uri = '/inventory.html';
    }

    get inventoryContainer() {
        return this._inventoryContainer();
    }

    get url() {
        return Cypress.config('baseUrl') + this._uri;
    }
}

export default InventoryPage;