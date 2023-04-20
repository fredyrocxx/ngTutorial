import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-sparent',
  templateUrl: './sparent.component.html',
  styleUrls: ['./sparent.component.css']
})
export class SParentComponent implements OnInit {

  messageFromsibling: any;

  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.dataservice.currentMessage.subscribe(message=>this.messageFromsibling = message);
  }

}
