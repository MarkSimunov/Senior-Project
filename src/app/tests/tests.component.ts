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
  anotherButton: boolean = false;
  buttonClickStatus: string = "The button was not clicked";
  textName: string = 'text name'; 
  days: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", 
  "Thursday", "Friday", "Saturday"];
  lineArray: string[] =[];

  getAge() {
    return this.age;
  }

  onButtonClick() {
    this.buttonClickStatus = "Text in input tag is " + this.textName;
  }

  onUpdateInputText(event: Event) {
    this.textName = (<HTMLInputElement>event.target).value;
  }

  onAnotherButton() {
    this.anotherButton = true;
  }

  getColor() {
    return this.anotherButton ? 'green' : 'red';
  }

  onAddLine() {
    this.lineArray.push("You added a line");
  }

  



}
