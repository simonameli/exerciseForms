import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

allCourses=[
  {id:1, name: 'geography', category:'world'},
  {id:2, name: 'history', category:'life'},
  {id:3, name: 'italian', category:'languages'},
  {id:4, name: 'maths', category:'numbers'},
]

onSubmit(f){}
}