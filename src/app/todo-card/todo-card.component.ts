import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css']
})
export class TodoCardComponent implements OnInit {

  name = 'Sophia'
  age = 20
  profession = 'Software developer'
  img = '../../assets/1.jpg'
  constructor() { }

  ngOnInit(): void {
  }

}
