import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'programming-competition';
  childState: boolean = false;

  greet(name: string) {
    alert("How's it going " + name + "?");  }

}
