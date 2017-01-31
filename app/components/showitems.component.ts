import {Component} from '@angular/core';

@Component({
    selector: 'showitems',
    template: `
              <div>
                <star [isActive]="starActive" (change) = "starVoted($event)"></star>
              </div>
    
              <likes (myLike)="like($event)" [isLiked]="tweet.isLiked" [totalLikes]= "tweet.totalLikes"></likes> 

              <vote [voteCount]="votes" (vote) = "voted($event)"></vote>
              <div>{{lastvote}}</div>  

              `
})


export class ShowItemsComponent{
    tweet = {
        isLiked: false,
        totalLikes: 15
    }
    votes = 20;
    lastvote = 0;
    starActive = false;

    starVoted($event) {
        console.log("ShowStarItems" + $event.newValue);        
    }

    like($event){
        console.log("ShowLikeItems" + $event.doILike);        

    }

    voted($event) {
        console.log("ShowItems" + $event.vote);
        this.lastvote = $event.vote;
    }
}