import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MileTrackerComponent } from './mile-tracker.component';

describe('MileTrackerComponent', () => {
  let component: MileTrackerComponent;
  let fixture: ComponentFixture<MileTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MileTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MileTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
