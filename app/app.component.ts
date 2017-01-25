import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<user></user>`,
})
export class AppComponent {
  name = 'John Doe';
  email = 'john.doe@gmail.com';
  address = {
    street: '12 Main street',
    city: 'Boston',
    state: 'PA'
  }
}
