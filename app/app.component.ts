import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
          <p>{{email}}</p>`,
})
export class AppComponent {
  name = 'John Doe';
  email = 'john.doe@gmail.com';
}
