import { Component } from '@angular/core';
import { AuthorService } from '../services/author.service'

@Component({
  selector: 'author',
  template: `
            <h3>{{name}}</h3>
             
            <hr>
            <div>
                <ul>
                    <li *ngFor="let author of authors">
                    {{ author }}<star></star>
                </ul>
            </div>
            `,
})

export class AuthorComponent {
  name: string;


  authors;

  constructor(authorService: AuthorService) {
    this.authors = authorService.getAuthors();
    
    console.log('constructor ran!');
    this.name = 'Authors'

  }
}

