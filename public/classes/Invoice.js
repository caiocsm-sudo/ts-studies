var Invoice = /** @class */ (function () {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    // shorthand for the code above
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return "".concat(this.client, " owes R$").concat(this.amount, " for ").concat(this.details);
    };
    return Invoice;
}());
export { Invoice };
