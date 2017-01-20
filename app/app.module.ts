import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { UserComponent }   from './components/user.component';
import { CourseComponent }   from './components/course.component';
import { AuthorComponent }   from './components/author.component';
import { StarComponent }   from './components/star.component';

import { CourseService }   from './services/course.service';
import { AuthorService }   from './services/author.service';

import { AutoGrowDirective} from './directives/auto-grow.directive';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, UserComponent, CourseComponent, AuthorComponent, AutoGrowDirective, StarComponent ],
  providers:    [ CourseService, AuthorService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }