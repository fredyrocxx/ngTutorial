import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private messageSource = new BehaviorSubject('default message');
  private messageSourceChild = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();
  messageFromChild = this.messageSource.asObservable();

  private obsValue = new BehaviorSubject("0");
  obsValSource = this.obsValue.asObservable();

  constructor() { }

  changeMessage(message: string){
    this.messageSource.next(message);
  }

  passLatestValue(newVal:string){
    this.obsValue.next(newVal);
    if(newVal=="0"){
     this.obsValue.error("error occured");
    }
  }
}
