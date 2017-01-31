import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
    selector: 'vote',
    template: `
            <div class="voter">
                <i class="glyphicon glyphicon-menu-up vote-button"
                [class.voted]="myVote==1"
                (click) = "upVote()"
                ></i>
                
                <span class="vote-counter">{{voteCount}}</span>
                
                <i class="glyphicon glyphicon-menu-down vote-button"
                [class.voted]="myVote==-1"
                (click)="downVote()"></i>
            </div>
    
              `,
    styles: [`
             .voter{
                text-align: center;
                width: 20px;
                color: #999;
             }   
             .vote-button {
                 cursor: pointer;
             }
             .vote-counter {
                 font-size: 1.5 em;
             }
             .voted {
                 color: orange;
             }
    
            `]          

})

export class VoteComponent {
    @Input() voteCount = 10;
    @Input() myVote = 0;

    @Output() vote = new EventEmitter();

    upVote() {
        if (this.myVote == 0 || this.myVote == -1) {
            this.voteCount++;
            this.myVote++;
            this.vote.emit({vote: this.myVote});
        }          
    }

    downVote() {
        if (this.myVote == 0 || this.myVote == 1) {
            this.voteCount--;
            this.myVote--;
            this.vote.emit({vote: this.myVote});
        }

    }

}