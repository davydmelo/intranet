import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertOrganizationalUnitReservationComponent } from './insert-organizational-unit-reservation.component';

describe('InsertOrganizationalUnitReservationComponent', () => {
  let component: InsertOrganizationalUnitReservationComponent;
  let fixture: ComponentFixture<InsertOrganizationalUnitReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertOrganizationalUnitReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertOrganizationalUnitReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
