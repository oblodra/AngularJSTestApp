import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
    selector: 'likes',
    template: `
                <i class="glyphicon glyphicon-heart"
                [class.highlighted] = "isLiked"
                (click)="onClick()"
                ></i>
                <span>{{ totalLikes }}</span>    
              `,
   styles: [`
                .glyphicon-heart {
                    color:#ccc;
                    cursor: pointer;
                }
                .highlighted {
                    color: deeppink;
                }`]              
})

export class LikesComponent {
    @Input() isLiked = false;
    @Input() totalLikes = 0;

    @Output() myLike = new EventEmitter();

    onClick() {
        this.isLiked = !this.isLiked;
        this.totalLikes += this.isLiked ? 1 : -1;
        this.myLike.emit({doILike: this.isLiked});
    }
}