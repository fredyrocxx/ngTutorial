import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[Errordiv]'
})
export class ErrorDirective {

  constructor(eleRef: ElementRef) { 
    debugger;
    eleRef.nativeElement.style.background='red';
    eleRef.nativeElement.style.fontWeight='bolder';
    eleRef.nativeElement.style.color='white';

  }

}
