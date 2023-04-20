import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, RequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-reactive-demo',
  templateUrl: './reactive-demo.component.html',
  styleUrls: ['./reactive-demo.component.css']
})
export class ReactiveDemoComponent implements OnInit {

  registerformGroup: FormGroup;
  isSubmitted: boolean;
  constructor(private fbObj: FormBuilder) { }

  ngOnInit() {
    // using FormGroup only
    // this.registerformGroup = new FormGroup({
    //   firstname: new FormControl(''),
    //   emailid: new FormControl(''),
    //   dob: new FormControl('')
    // })

    // using FormBuilder

    this.registerformGroup = this.fbObj.group({
      firstname: ['', Validators.required],
      emailid: ['', [Validators.email, Validators.required]],
      dob: ['', Validators.required]
    })

  }

  onRegister(registerForm: FormGroup) {
    this.isSubmitted = true;
    if (registerForm.valid) {
      console.log('form valid or not : ' + registerForm.valid);
      console.log('first name is ' + registerForm.value.firstname);
      console.log('email is ' + registerForm.value.emailid);
      console.log('dob ' + registerForm.value.dob);
      debugger;
      var fname = this.registerformGroup.get('firstname');
      var email = this.registerformGroup.controls.emailid;
      console.log(fname);
     
    } else {
      alert('Please fill the form');
    }
  }

}
