import { Component, OnInit } from '@angular/core';
import { faPlus  } from '@fortawesome/free-solid-svg-icons'
import { DataService } from 'src/app/service/data.service';
import { Observable } from 'rxjs'


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  index: number = 0;
  faPlus= faPlus;
  observableVal = new Observable();
  arrNew = [1,2,3];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.counter();
    this.observableVal.subscribe((val)=>
    {
      // next callback
      console.log(val)
    },
    (err)=>{
    console.log(err)
      //error callback
    },
    ()=>{
     // complete callback
     console.log("completed");
    }
    )
  }

  addEmp() {
    this.index = this.index + 1;
    this.dataService.passLatestValue("New Employee added with " + this.index.toString());
    
  }

  counter(){
  this.observableVal = new Observable((observer)=>{
   setTimeout(() => {
     observer.next("1")
   }, 2000);

   setTimeout(() => {
    observer.next("2")
  }, 4000);

  setTimeout(() => {
    observer.next("3")
  }, 6000);

  // setTimeout(() => {
  //   observer.error("error encountered")
  // }, 6000);


  setTimeout(() => {
    observer.next("4")
  }, 8000);
  
  setTimeout(() => {
    observer.complete()
  }, 6000);

  setTimeout(() => {
    observer.next("5")
  }, 10000);

  })

  }

}
