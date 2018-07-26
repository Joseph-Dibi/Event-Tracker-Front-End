export class Run {
  id: number;
  miles: number;
  time: number;
  week: number;
  comments: string;

  constructor(id?: number, miles?: number, time?: number, week?: number, comments?: string) {
    this.id = id;
    this.miles = miles;
    this.time = time;
    this.week = week;
    this.comments = comments;
  }
}
