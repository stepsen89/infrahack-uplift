import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedalsListComponent } from './medals-list.component';

describe('MedalsListComponent', () => {
  let component: MedalsListComponent;
  let fixture: ComponentFixture<MedalsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedalsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedalsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
