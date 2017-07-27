import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertLabWorkstationReservationComponent } from './insert-lab-workstation-reservation.component';

describe('InsertLabWorkstationReservationComponent', () => {
  let component: InsertLabWorkstationReservationComponent;
  let fixture: ComponentFixture<InsertLabWorkstationReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertLabWorkstationReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertLabWorkstationReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
