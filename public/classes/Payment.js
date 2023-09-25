var Invoice = /** @class */ (function () {
    function Invoice(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return "".concat(this.recipient, " is owed R$").concat(this.amount, " for ").concat(this.details);
    };
    return Invoice;
}());
export { Invoice };
