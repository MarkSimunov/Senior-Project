import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-test',
  templateUrl: './input-test.component.html',
  styleUrls: ['./input-test.component.css']
})
export class InputTestComponent implements OnInit {

  name: string = "Mark";
  @Output() greetEvent = new EventEmitter();
  @Input() state: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  callParentGreet(){
   this.greetEvent.emit(this.name);
  }

}
