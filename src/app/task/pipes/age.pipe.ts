import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  public transform(value: string, now: number): any {
    const ellapsedMilliseconds = now - Date.parse(value);
    return Math.floor(ellapsedMilliseconds / 1000 / 60);
  }

}
