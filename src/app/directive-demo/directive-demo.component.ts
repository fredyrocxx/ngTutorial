import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-demo',
  templateUrl: './directive-demo.component.html',
  styleUrls: ['./directive-demo.component.css']
})
export class DirectiveDemoComponent implements OnInit {

  customers: any[];
  headerClass:any;
  isAdmin:boolean;
  adminTheme:any;
  isError: boolean;

  constructor() {
    this.customers = [
      { customerNo: "Cust01", name: "Ram", address: "Chembur", city: "Mumbai", state: "MH" },
      { customerNo: "Cust02", name: "Jay", address: "Thane", city: "Mumbai", state: "MH" },
      { customerNo: "Cust03", name: "John", address: "Panvel", city: "Navi Mumbai", state: "MH" },
      { customerNo: "Cust04", name: "Vicky", address: "Bandra", city: "Mumbai", state: "MH" },
    ]
    if(this.customers.length>3){
      this.headerClass= "clsheader-red";
    } else {
      this.headerClass= "clsheader-black";
    }
    
    this.isAdmin = false;
    this.isError=true;
    this.adminTheme = {'background-color': 'green'};
  }

  refreshCustomers(){
   
    this.customers = [
      { customerNo: "Cust01", name: "Ram", address: "Chembur", city: "Mumbai", state: "MH" },
      { customerNo: "Cust02", name: "Jay", address: "Thane", city: "Mumbai", state: "MH" },
      { customerNo: "Cust03", name: "John", address: "Panvel", city: "Navi Mumbai", state: "MH" },
     ]
  }

  trackByCustomer(item) {
    return item;
  }


  ngOnInit() {
  }

}
