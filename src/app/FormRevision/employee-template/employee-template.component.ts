import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../models/User'

@Component({
  selector: 'app-employee-template',
  templateUrl: './employee-template.component.html',
  styleUrls: ['./employee-template.component.css']
})
export class EmployeeTemplateComponent implements OnInit {

  userName: string;
  emailId: string;
  address: string;
  dob: any;
  disableSave: boolean = true;
  userList: User[] = [];
  currentUserId: any;
  constructor() { }

  ngOnInit() {
  }

  SaveUser(userForm: NgForm) {
    debugger;
    var index = this.userList.length > 0 ? Math.max.apply(null, this.userList.map(item => item.id)) : 0;
    let user = new User();
    
    user.id=index + 1;

    if (userForm.valid) {
      user.name = userForm.controls.inputName.value;
      user.email = userForm.controls.inputEmail.value;
      user.dob = userForm.value.inputDOB;
      user.address = userForm.value.inputAddress;
      var userExists = this.userList.find(x=>x.id == this.currentUserId);
      
      if(!userExists){
        this.userList.push(user);
      } else {
        user.id = this.currentUserId;
        this.editUser(user);
      }

      userForm.reset();
    }
    
  }

  deleteUser(user:User){
    this.userList = this.userList.filter(x=>x.id != user.id);

  }

  getUserDetails(user:User, userForm: NgForm){
   userForm.controls.inputName.setValue(user.name);
   userForm.controls.inputDOB.setValue(user.dob);
   userForm.controls.inputEmail.setValue(user.email);
   userForm.controls.inputAddress.setValue(user.address);
   this.currentUserId = user.id;
  }

  editUser(user:User){
  var userIndex = this.userList.findIndex(x=>x.id == user.id);
  this.userList[userIndex] = user;
  this.currentUserId =0;
  }

}
