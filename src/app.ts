// classes
class Invoice {
  client: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format() {
    return `${this.client} owes R$${this.amount} for ${this.details}`;
  }
}

const invOne = new Invoice('Ronald', 'Citibank Seagayi', 29.99);
const invTwo = new Invoice('Richard', 'Nubank Fatura', 2330);

const invoices: Invoice[] = [];
invoices.push(invOne);

invoices.forEach(inv => {
  console.log(inv.client, inv.details, inv.amount, inv.format());
});

// inputs
const form = document.querySelector('.new-item-form') as HTMLFormElement;
const types = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// HTMLFormElement, HTMLInputElement, HTMLSelectElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(invOne.format());
  console.log(types.value, toFrom.value, details.value, amount.value);
});

