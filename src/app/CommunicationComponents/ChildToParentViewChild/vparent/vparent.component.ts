import { Component, OnInit, ViewChild } from '@angular/core';
import { VChildComponent } from '../vchild/vchild.component';

@Component({
  selector: 'app-vparent',
  templateUrl: './vparent.component.html',
  styleUrls: ['./vparent.component.css']
})
export class VParentComponent implements OnInit {

  @ViewChild(VChildComponent,null) vchildobj;
  messageFromVChildComponent: string;
  isDataValue: boolean;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.messageFromVChildComponent = this.vchildobj.messageToPass;
    this.isDataValue = this.vchildobj.IsData;
  }

}
