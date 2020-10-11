import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  constructor() { 
    setTimeout(() => {
      this.buttonClick = true;
    }, 5000);
  }

  ngOnInit(): void {
  }

  name: string = "Mark";
  age: number = 22;
  buttonClick: boolean = false;
  buttonClickStatus: string = "The button was not clicked";
  textName: string = ''; 
  days: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", 
  "Thursday", "Friday", "Saturday"];

  getAge() {
    return this.age;
  }

  onButtonClick() {
    this.buttonClickStatus = "The button was clicked";
  }

  onUpdateInputText(event: Event) {
    this.textName = (<HTMLInputElement>event.target).value;
  }

}
