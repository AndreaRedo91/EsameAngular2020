import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  title = "todolist";
  model = {
    el: ""
  }
  array = [];
  constructor() { }

  onSubmit() {
    if (this.model.el.trim() != "") {
      this.array.push(this.model.el);
    } else {
      alert("Inserisci qualcosa furbacchione!");
    }
  }

  del(elem: any) {
    this.array.splice(elem.idx, elem.idx++); //why does it work funny???
    console.log(elem);
  }


  ngOnInit() {
  }

}
