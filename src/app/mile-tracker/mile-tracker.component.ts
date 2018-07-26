import { WeekFilterPipe } from './../week-filter.pipe';
import { Run } from './../models/run';
import { MileTrackerService } from './../mile-tracker.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mile-tracker',
  templateUrl: './mile-tracker.component.html',
  styleUrls: ['./mile-tracker.component.css']
})
export class MileTrackerComponent implements OnInit {
  subtitle = 'Still To-Do';
  selected = null;
  editRun = null;
  showComplete = false;
  average = null;
  total = null;
  week = null;

  runs: Run[] = [];
  newRun: Run = new Run();
  // todoListLength() {
  //  return this.incomplete.transform(this.todos, this.showComplete).length;
  // }
  displayTodo(run) {
    this.selected = run;
  }
  sortByWeek(runWeek) {
    console.log(runWeek);
    this.week = runWeek;
    this.loadRuns();
  }
  clearWeek() {
    this.week = null;
  }
  clearAverage() {
    this.average = null;
  }
  clearTotal() {
    this.total = null;
  }
  checkCompleted(todo) {
    if (todo.completed === true) {
      return 'completed';
    }
  }
  titleDisplay() {
    if (this.showComplete === false) {
      this.subtitle = 'Still To-Do';
    } else {
      this.subtitle = 'Full To-Do List';
    }
    return this.subtitle;
  }

  addRun() {
    this.tracker.create(this.newRun).subscribe(
      data =>  this.loadRuns()
     ,

      err => console.log(err)
    );
    this.newRun = new Run();
  }
  displayTable() {
    this.selected = null;
  }
  setEditRun() {
    this.editRun = Object.assign({}, this.selected);
  }
  saveEditRun() {
  this.tracker.update(this.editRun).subscribe(
    data => this.loadRuns(),

    err => console.log(err)
  );
  this.editRun = null;
  this.selected = null;
  }
  averageRun() {
    this.tracker.average().subscribe(
      data => this.average = data,
      err => console.log(err)
    );
  }
  weeklyAverageRun() {
    this.tracker.weekAverage(this.week).subscribe(
      data => this.average = data,
      err => console.log(err)
    );
  }
  totalRun() {
    this.tracker.total().subscribe(
      data => this.total = data,
      err => console.log(err)
    );
  }
  weeklyTotalRun() {
    this.tracker.weekTotal(this.week).subscribe(
      data => this.total = data,
      err => console.log(err)
    );
  }
  cancelEditRun() {
    this.editRun = null;
  }
  deleteRun(id) {
    this.tracker.destroy(id).subscribe(
      data => this.loadRuns(),

      err => console.log(err)
    );
  }

  loadRuns() {
    this.tracker.index().subscribe(
      data => this.runs = data,

      err => console.log(err)
    );
  }
  findWeeks() {
    const weeks = [];
    this.runs.forEach(run => {
        if (!weeks.includes(run.week)) {
          weeks.push(run.week);
        }
    });
    return weeks;
  }
  // tslint:disable-next-line:max-line-length

  constructor(private tracker: MileTrackerService) { }

  ngOnInit() {
    this.loadRuns();
  }

}
