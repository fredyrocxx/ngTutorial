import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-demo',
  templateUrl: './template-demo.component.html',
  styleUrls: ['./template-demo.component.css']
})
export class TemplateDemoComponent implements OnInit {

  userName: string;
  emailId: string;
  password: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formObj: NgForm){

    debugger;
    console.log(formObj);
  }

}
