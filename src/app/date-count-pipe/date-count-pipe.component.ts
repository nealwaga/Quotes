import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})

export class DateCountPipe implements PipeTransform {
  transform(value: any): number {
    let today: Date = new Date(); //Current data & time
    let todayDate: any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    let dateDiff = Math.abs(value - todayDate)
    const daySecs = 86400;
    let dateDiffSecs = dateDiff * 0.001;
    let daysCounter = dateDiffSecs/daySecs;
    let monthCounter = daysCounter/30;

    if(daysCounter >= 1 && value < todayDate) {
      return daysCounter;
    } else {
      return 0;
    }
  }
}