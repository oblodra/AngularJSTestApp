import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { UserComponent }   from './components/user.component';
import { CourseComponent }   from './components/course.component';
import { AuthorComponent }   from './components/author.component';
import { StarComponent }   from './components/star.component';
import { AboutComponent }   from './components/about.component';

import { routing } from './app.routing';

import { CourseService }   from './services/course.service';
import { AuthorService }   from './services/author.service';
import { PostsService}     from './services/posts.service';

import { AutoGrowDirective} from './directives/auto-grow.directive';
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing ],
  declarations: [ AppComponent, UserComponent, CourseComponent, AuthorComponent, AutoGrowDirective, StarComponent, AboutComponent ],
  providers:    [ CourseService, AuthorService, PostsService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }