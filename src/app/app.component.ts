import { Component, Directive } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'First Division';
  secondTitle = 'Second Division';
  dob = '10/08/1992';
  googleLink ="https://www.google.com/";
  
  addNumbers(){
    var sum = 20 +10;
    return sum;
  }

}
