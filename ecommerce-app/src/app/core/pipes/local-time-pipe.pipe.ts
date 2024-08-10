import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localTime',
})
export class LocalTimePipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {}
  transform(value: string | undefined): string {
    // if (!value) return '';

    // if (!isDateString(value)) return value;

    // return convertDateTimeToLocal(value, this.datePipe) || '';
    return '';
  }
}
