import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-emp-react-fm-builder',
  templateUrl: './emp-react-fm-builder.component.html',
  styleUrls: ['./emp-react-fm-builder.component.css']
})
export class EmpReactFmBuilderComponent implements OnInit {
  empFormGroup: FormGroup;
  isSubmitted: boolean;
  constructor(private frmBuilder: FormBuilder) { }

  ngOnInit() {
    this.empFormGroup  = this.frmBuilder.group({
      Name:['',Validators.required],
      Salary:['',Validators.required],
      DOB:['',Validators.required]
    })
  }

  submitEmployee(){
    debugger;
    this.isSubmitted = true;
   let Name =  this.empFormGroup.get('Name').value;
   let name1 = this.empFormGroup.controls.Name.value;
  }
}
