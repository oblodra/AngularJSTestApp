import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
    selector: 'star',
    template: `
            <i class="glyphicon"
                [class.glyphicon-star-empty] = "!isActive" 
                [class.glyphicon-star] = "isActive"
                (click) = "onClick()"
            ></i>  
            `,
    styles: [`.glyphicon-star{
                color:orange
            }`

    ]        
  
})
export class StarComponent {
    @Input() isActive = false;
    @Output() change = new EventEmitter();
    
    onClick() {
        this.isActive = !this.isActive;
        this.change.emit({newValue: this.isActive});
    }
}