import { Component } from '@angular/core';
import { CourseService } from '../services/course.service'

@Component({
  selector: 'user',
  template: `<div>
              <h1>Hello {{name}}</h1>
          </div>
          <hr>
          <div>
              <ul>
                <li *ngFor="let course of courses">
                {{ course }}
              </ul>
          </div>`,
})

export class UserComponent {
  name: string;


  courses;

  constructor(courseService: CourseService) {
    this.courses = courseService.getCourses();
    
    console.log('constructor ran!');
    this.name = 'Angular'

  }
}

