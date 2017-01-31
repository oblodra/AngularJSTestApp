import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <nav>
          <a routerLink="/">Home</a>          
          <a routerLink="/about">About</a>
          <a routerLink="/example">Example</a>
          <a routerLink="/showitems">ShowExamples</a>
          <a routerLink="/twitter">Twitter</a>
          <a routerLink="/github">Github profile</a>
          <a routerLink="/formExample">Form</a>
          <a routerLink="/subformExample">Subform</a>
      </nav>
      <hr />
      <router-outlet></router-outlet> 
            `
})
export class AppComponent { }