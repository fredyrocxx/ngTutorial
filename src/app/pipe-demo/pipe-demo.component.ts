import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  title = 'Angular Pipes!';
  todaydate = new Date();
  jsonval = { name: 'James', age: '25', address: { a1: 'Mumbai', a2: 'Karnataka' } };
  months = ["Jan", "Feb", "Mar", "April", "May", "Jun",
    "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

  constructor() { }

  ngOnInit() {
  }

}
