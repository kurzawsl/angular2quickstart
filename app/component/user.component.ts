import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `<h1>Hello {{name}}</h1>
          <p><strong>Email:</strong> {{email}}</p>
          <p><strong>Address:</strong> {{address.street}} {{address.city}} {{address.state}}</p>`,
})
export class UserComponent {
  name: string;
  email: string;
  address: Address;

  constructor(){
    this.name = 'John Doe';
    this.email = 'john.doe@gmail.com';
    this.address = {
      street: '12 Main street',
      city: 'Boston',
      state: 'PA'
    }
  }

}

interface Address{
  street: string;
  city: string;
  state: string;
}
