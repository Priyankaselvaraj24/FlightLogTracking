import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogFlightFormComponent } from './log-flight-form.component';

describe('LogFlightFormComponent', () => {
  let component: LogFlightFormComponent;
  let fixture: ComponentFixture<LogFlightFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogFlightFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogFlightFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
