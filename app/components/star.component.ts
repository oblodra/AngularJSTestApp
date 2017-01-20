import { Component } from '@angular/core';
@Component({
    selector: 'star',
    template: `
  <i class="glyphicon"
        [class.glyphicon-star-empty] = "!isActive" 
        [class.glyphicon-star] = "isActive"
        (click) = "onClick()"
  ></i>  
  `
  
})
export class StarComponent {
    isActive = false;

    onClick() {
        this.isActive = !this.isActive;
    }
}