import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listelement',
  templateUrl: './listelement.component.html',
  styleUrls: ['./listelement.component.css']
})
export class ListelementComponent implements OnInit {
  @Input() text: string;
  @Input() idx: number;
  @Output() clicked = new EventEmitter<ListelementComponent>();
  checked = false;
  elClass = "todo";
  del() {

    this.clicked.emit(this);
  }
  checkOnEl() {
    if (!this.checked) {
      this.checked = true;
      this.elClass = "done";

    } else {
      this.checked = false;
      this.elClass = "todo";
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
