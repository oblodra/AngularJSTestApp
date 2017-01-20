import { Component } from '@angular/core';
import { CourseService } from '../services/course.service'

@Component({
  selector: 'course',
  template: `
            <h3>{{name}}</h3>
             
            <hr>
            <div>
                <ul>
                    <li *ngFor="let course of courses">
                    {{ course }}<star></star>
                </ul>
            </div>
            `,
})

export class CourseComponent {
  name: string;


  courses;

  constructor(courseService: CourseService) {
    this.courses = courseService.getCourses();
    
    this.name = 'Courses'

  }
}

