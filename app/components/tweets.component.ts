import { Component } from '@angular/core';
import { TweetService} from '../services/tweet.service'

@Component({
    selector: 'tweetList',
    template: `
            <div *ngFor="let tweet of tweets">
                <tweet [data]="tweet"></tweet>
            </div>    
    
    `
})

export class TweetsComponent {

    tweets;

    constructor(tweetService: TweetService) {
        this.tweets = tweetService.getTweets();
    }

    
}