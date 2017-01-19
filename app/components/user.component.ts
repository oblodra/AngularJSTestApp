import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `<div>
              <h1>Hello {{name}}</h1>
          </div>
          <hr>
          <div>
              <p><strong>Email:</strong> {{email}}</p>
              <p><strong>Address:</strong>{{address.street}} {{address.city}}, {{address.state}}</p>
              <ng-content select=".component-content"></ng-content>
          </div>`,          
})

export class UserComponent { 
  name: string;
  email: string;
  address: address;

  constructor() {
      console.log('constructor ran!');
      this.name = 'Angular'
      this.email = 'john@email.com'
      this.address = {
          street: '12 Main st',
          city: 'Detroit',
          state: 'Fl'
      }
  }
}

interface address {
  street: string;
  city: string;
  state: string;
}