import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course.model'
 
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  currentCourse = null;
  courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'Angular 9 Fundamentals 2',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 50,
      favorite: true
    },
    {
      id: 3,
      title: 'Angular 9 Fundamentals 3',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 60,
      favorite: true
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }


  selectCourse(course: Course) {
    this.currentCourse = course;
  }


  deleteCourse(courseId: number) {
    console.log('COURSE DELETED!', courseId);
  }

}
