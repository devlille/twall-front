import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: Date, args?: any): any {
    const date = moment(value);
    return date.locale('fr').fromNow();
  }

}
