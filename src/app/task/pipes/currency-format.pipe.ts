import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormatPipe implements PipeTransform {

  transform(value: number, chunkDelimiter: string = ' ', decimalDelimiter: string = ' ', currencySign: string=''): any {
    let parts = value.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, chunkDelimiter);
    return parts.join(decimalDelimiter) + currencySign;
  }

}
