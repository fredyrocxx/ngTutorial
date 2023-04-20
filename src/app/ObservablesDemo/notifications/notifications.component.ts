import { Component, OnInit } from '@angular/core';
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  faBell = faBell;
  count: any;
  notifications: any[] = [];
  showNotification: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.obsValSource.subscribe(
      (newValue) => {
        this.count = newValue;
        if (newValue != "0") {
          this.notifications.push(newValue);

        }
      }
    );

  }

  showList() {
    if (this.showNotification) {
      this.showNotification = false;
    } else {
      this.showNotification = true;
    }
  }


}
