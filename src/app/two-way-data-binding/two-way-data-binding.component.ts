import { Component, OnInit } from '@angular/core';
import {  FormsModule} from '@angular/forms'

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {

  constructor() { }

  
  firstName = "John";
  lastName = "Doe";

  ngOnInit() {
  }

  SaveData(){
    debugger;
    var fullName = this.firstName +" "+ this.lastName;
  }

}
