import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderby'
})

export class OrderByPipe implements PipeTransform {
  public transform( array: Array<any>, orderField: string, orderType: boolean ): Array<any> {
    if(orderField==undefined || array==undefined){
        return;
    };

    //console.log("array="+array+"; call OrderByPipe -> 'orderField='"+ orderField+"; 'orderType='"+orderType);
    array.sort( ( a: any, b: any ) => {
        let ae = a[ orderField ];
        let be = b[ orderField ];
        if ( ae == undefined && be == undefined ) return 0;
        if ( ae == undefined && be != undefined ) return orderType ? 1 : -1;
        if ( ae != undefined && be == undefined ) return orderType ? -1 : 1;
        if ( ae == be ) return 0;
        return orderType ? (ae.toString().toLowerCase() > be.toString().toLowerCase() ? -1 : 1) : (be.toString().toLowerCase() > ae.toString().toLowerCase() ? -1 : 1);
    } );
    return array;
  }
}