import { Pipe, PipeTransform } from '@angular/core';

// C'est le declarator qui fait que la classe est un pipe
@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: any, args?: any[]): any {
    if (value) {
      if (args) {
        return value.totalTtc();
      } else {
        return value.totalHt();
      }
    }
    return null;

  }

}
