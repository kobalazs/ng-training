import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  public transform(value: string, now: number): any {
    let diffMs: number = now - Date.parse(value);
    return Math.floor(diffMs / 1000 / 60);
  }

}
