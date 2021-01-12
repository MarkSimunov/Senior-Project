import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-questions',
  templateUrl: './create-questions.component.html',
  styleUrls: ['./create-questions.component.css', '../app.component.css']
})
export class CreateQuestionsComponent implements OnInit {

  questions = new Array(8);

  constructor() { }

  ngOnInit(): void {
  }

  submitQuestions(form :NgForm) {

  }

}
