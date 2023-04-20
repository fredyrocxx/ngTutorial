import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/models/Employee';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  employeeFrmGrp: FormGroup;
  isSubmitDisabled: boolean = true;
  employeeList: Employee[] = [];
  editMode: boolean = false;
  currentUserId: any = 0;
  constructor(private employeeService: EmployeeService,
    private frmBuilder: FormBuilder) { }

  ngOnInit() {
    this.employeeFrmGrp = this.frmBuilder.group({
      Name: ['', Validators.required],
      Gender: ['', Validators.required],
      Dob: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      IsActive: ['', Validators.required],
    })
    this.getEmployeeList();
  }

  getEmployeeList() {
    this.employeeService.getEmployees().subscribe((empData) => {
      debugger;
      this.employeeFrmGrp.reset();
      console.log(empData);
      this.employeeList = empData;
    })
  }

  saveEmployee() {
    if (this.employeeFrmGrp.valid) {
      let formValues = this.employeeFrmGrp.controls;
      let employee = new Employee();
      employee.name = formValues.Name.value;
      employee.email = formValues.Email.value;
      employee.gender = formValues.Gender.value;
      employee.dateOfBirth = formValues.Dob.value;
      employee.isActive = formValues.IsActive.value;
      if(this.editMode){
        employee.id = this.currentUserId;
        this.employeeService.updateEmployee(employee).subscribe(response => {
          alert(employee.name + ' has been updated');
          this.getEmployeeList();
        }, err => {
  
        })
      } else {
        this.employeeService.addEmployee(employee).subscribe(response => {
          alert(employee.name + ' has been added');
          this.getEmployeeList();
        }, err => {
  
        })
      }
      
    }

  }

  deleteEmployee(employeeObj: Employee) {
    this.employeeService.deleteEmployee(employeeObj.id).subscribe
    (response => {
      alert(employeeObj.name + ' is deleted');
      this.getEmployeeList();
    }, err => {

    })
  }

  setEditMode(employeeObj: Employee) {

    this.editMode = true;
    this.employeeFrmGrp.controls.Name.setValue(employeeObj.name);
    this.employeeFrmGrp.controls.Gender.patchValue(employeeObj.gender);
    this.employeeFrmGrp.controls.Dob.patchValue(employeeObj.dateOfBirth);
    this.employeeFrmGrp.controls.Email.patchValue(employeeObj.email);
    this.employeeFrmGrp.controls.IsActive.patchValue(employeeObj.isActive);
    this.currentUserId = employeeObj.id;

  }

}
