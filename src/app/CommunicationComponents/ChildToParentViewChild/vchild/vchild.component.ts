import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vchild',
  templateUrl: './vchild.component.html',
  styleUrls: ['./vchild.component.css']
})
export class VChildComponent implements OnInit {

  messageToPass = "Message from vchild component";
  IsData: boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
