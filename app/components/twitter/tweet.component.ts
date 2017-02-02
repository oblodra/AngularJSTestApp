import {Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'tweet',
    template: `
        <div class="media">
            <div class="media-left">
                <a href="#">
                    <img class="media-object" src="{{ data.imageUrl }}">
                </a>    
            </div>
            <div class="media-body">
                <h4 class="media-heading">
                    {{ data.author }} <span class="handle">{{ data.handle }}</span>
                </h4>
                {{ data.body }}
                <div>
                    <likes (myLike) = "voting($event)" [totalLikes]="data.totalLikes" [isLiked]="data.isLiked"></likes>
                </div>
            </div>
        </div>                   
        `,
    styles: [`
        .handle {
            color: #ccc;
        }
        .media {
            margin-bottom: 20px;
        }
        .media-object {
            border-radius: 10px;
        }
    `]

})

export class TweetComponent{
    @Input() data;

    constructor() {
 //       console.log(this.data);
    }

    voting($event) {
        console.log("ShowTweetLikeItems" + $event.doILike);
    }
}