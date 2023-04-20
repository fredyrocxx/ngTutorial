import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-ssibling',
  templateUrl: './ssibling.component.html',
  styleUrls: ['./ssibling.component.css']
})
export class SSiblingComponent implements OnInit {

  messageData: string;
  changeIndex = 0;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    //this.dataService.currentMessage.subscribe(message=> this.messageData = message);
  }

  newMessage(){
    //this.changeIndex++;
    //this.dataService.changeMessage("Hello from sibling "+ this.changeIndex);
  }


}
