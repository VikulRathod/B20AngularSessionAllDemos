import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): string {

    let currentDate = new Date();
    let dateofBirth = new Date(value);
    let result: string = '';
    if (args[0] === 'month') {
      // implement logic for year & month difference
    } else if (args[0] === 'day') {
      // implement logic for year & month & day difference
    } else {
      let ageInYear = currentDate.getFullYear() - dateofBirth.getFullYear();
      result = `${ageInYear} years`;
    }

    return result;
  }

}
