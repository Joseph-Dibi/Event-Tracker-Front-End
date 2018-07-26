import { Pipe, PipeTransform } from '@angular/core';
import { Run } from './models/run';

@Pipe({
  name: 'weekFilter'
})
export class WeekFilterPipe implements PipeTransform {
  transform(runs: Run[], week?: number): any {
   const weekRuns = [];
    runs.forEach(run => {
      if (week !== null) {
        if (run.week === Number(week)) {
          weekRuns.push(run);
        }
      } else {
        weekRuns.push(run);
      }
    });
    return weekRuns;
  }
}
