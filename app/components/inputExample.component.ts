import { Component } from '@angular/core';

@Component({
  selector: 'inputexample',
  template: `
    <input 
        [(ngModel)]="name" 
        #ctrl="ngModel" 
        required>
    <p>Value: {{ name }}</p>
    <p>Valid: {{ ctrl.valid }}</p>
    <button (click)="setValue()">Set value</button>
            `,
})
export class InputExampleComponent {
  name: string = '';
  setValue() { 
      this.name = 'Nancy'; 
  }
}