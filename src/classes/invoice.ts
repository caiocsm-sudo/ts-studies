// classes
// access modifiers: public, private and readonly = can read only (public)
import { HasFormatter } from '../interfaces/HasFormatter';

export class Invoice implements HasFormatter {
  // readonly client: string;
  // private details: string;
  // public amount: number;

  // shorthand for the code above
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) { }

  format() {
    return `${this.client} owes R$${this.amount} for ${this.details}`;
  }
}

