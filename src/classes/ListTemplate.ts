/* 
 * 1 - Register a list component (ul);
 * 2 - Create a render method to render a new li to the container
 *     -- accept arguments: invoice or payment, a heading and a position
 *     -- create the new html template (li, h4, p)
 *     -- add the li template to the start or end of the list
 * */

import { Payment } from "./Payment";
import { Invoice } from "./Invoice";
import { HasFormatter } from "../interfaces/HasFormatter";

export class ListTemplate {
  constructor(
    private container: HTMLUListElement
  ) { }

  render(item: HasFormatter, heading: string, position: 'start' | 'end') {
    const li = document.createElement('li');
    const h4 = document.createElement('h4')
    h4.innerText = heading;
    const parag = document.createElement('p')
    parag.innerText = item.format();

    li.append(h4);
    li.append(parag);

    if(position === 'start') {
      this.container.prepend(li);
    } else {
      this.container.append(li);
    }
  }
}

