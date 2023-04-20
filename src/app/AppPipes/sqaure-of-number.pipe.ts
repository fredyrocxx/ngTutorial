import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sqaureOfNumber'
})
export class SqaureOfNumberPipe implements PipeTransform {

  transform(value: any): any {
    return Math.sqrt(value);
  }

}
