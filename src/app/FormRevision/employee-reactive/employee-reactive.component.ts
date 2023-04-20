import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-employee-reactive',
  templateUrl: './employee-reactive.component.html',
  styleUrls: ['./employee-reactive.component.css']
})
export class EmployeeReactiveComponent implements OnInit {
  employeeFormGrp: FormGroup;
  constructor() { }

  ngOnInit() {
    this.employeeFormGrp = new FormGroup({
      Name: new FormControl(),
      Salary: new FormControl(),
      DOB: new FormControl()
    })

  }

  submitEmployee(){
  
    debugger;
    console.log(this.employeeFormGrp);
  //  this.employeeFormGrp.value.Name;
  //  this.employeeFormGrp.value.Salary;
  //  this.employeeFormGrp.value.DOB;

  //  this.employeeFormGrp.controls.Name.value;
  //  this.employeeFormGrp.controls.Salary.value;
  //  this.employeeFormGrp.controls.DOB.value;
   let isNameTouched = this.employeeFormGrp.controls.Name.touched;
   if(isNameTouched){
    alert("Name enterd")
   } else {
     alert("Name required");
   }

  }

}


