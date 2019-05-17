import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaultReportComponent } from './fault-report.component';

describe('FaultReportComponent', () => {
  let component: FaultReportComponent;
  let fixture: ComponentFixture<FaultReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaultReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaultReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
