import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: string, now: number): number {
    const offsetInMilliseconds = (new Date()).getTimezoneOffset() * 60 * 1000;
    const ellapsedMilliseconds = now + offsetInMilliseconds - Date.parse(value);
    return Math.floor(ellapsedMilliseconds / 1000 / 60); // in minutes
  }

}
