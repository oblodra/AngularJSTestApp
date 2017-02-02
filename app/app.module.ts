import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user.component';
import { CourseComponent } from './components/course.component';
import { AuthorComponent } from './components/author.component';
import { StarComponent } from './components/star.component';
import { AboutComponent } from './components/about.component';
import { ExampleComponent } from './components/example.component';
import { ShowItemsComponent } from './components/showitems.component';
import { VoteComponent } from './components/vote.component';
import { LikesComponent } from './components/likes.component';
import { TweetComponent } from './components/twitter/tweet.component';
import { TweetsComponent } from './components/twitter/tweets.component';
import { TwitterComponent } from './components/twitter/twitter.component';
import { GitHubProfileComponent } from './components/github/github-profile.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { SubscriptionFormComponent } from './components/subscription-form/subscription-form.component';

import { routing } from './app.routing';

import { CourseService } from './services/course.service';
import { AuthorService } from './services/author.service';
import { PostsService } from './services/posts.service';
import { TweetService } from './components/twitter/tweet.service';
import { GitHubService } from './components/github/github.service';

import { AutoGrowDirective } from './directives/auto-grow.directive';
@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule,
            HttpModule, routing],
  declarations: [AppComponent, UserComponent, CourseComponent, AuthorComponent,
    ExampleComponent, AutoGrowDirective, StarComponent,
    AboutComponent, ShowItemsComponent, VoteComponent,
    LikesComponent, TweetComponent, TweetsComponent,
    TwitterComponent, GitHubProfileComponent, ContactFormComponent,
    SubscriptionFormComponent],
  providers: [CourseService, AuthorService, PostsService,
    TweetService, GitHubService],
  bootstrap: [AppComponent]
})
export class AppModule { }