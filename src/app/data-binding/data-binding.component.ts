import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
    title="Angular Property Binding Example Text"
  
    //Example 1
    isDisabled= false;
  
  constructor() { }

  ngOnInit() {
  }

  ShowTime(){

    var now = new Date();
    alert(now.toUTCString());
  }

}
