import { Component } from '@angular/core';
import { CourseService } from '../services/course.service'
import { PostsService } from '../services/posts.service';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
})

export class UserComponent {
  name: string;
  email: string;
  address: address;
  hobbies : string[];
  showHobbies: boolean;
  posts: Post[];
  
  courses;

  constructor(courseService: CourseService, private postsService: PostsService) {
    this.courses = courseService.getCourses();
    
    console.log('constructor ran!');
    this.name = 'John Doie'
    this.email = 'john@underworld.com'
    this.address = {
      street: '12 Main st',
      city: 'Detroit',
      state: 'UK'
    }
    this.hobbies = ["Music","Movies","Sports"];
    this.showHobbies = false;

    this.postsService.getPosts().subscribe(posts => {
        this.posts = posts;
    })
  }

  toggleHobbies() {
    console.log('Button pressed!');
    this.showHobbies = !this.showHobbies;

  }

  addHobby(hobby) {
    console.log('addHobby' + hobby);
    this.hobbies.push(hobby);

  }

  deleteHobby(i) {
    this.hobbies.splice(i,1);
  }
}

interface address {
  street: string;
  city: string;
  state: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
}