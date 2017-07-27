import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertOrganizationalUnitComponent } from './insert-organizational-unit.component';

describe('InsertOrganizationalUnitComponent', () => {
  let component: InsertOrganizationalUnitComponent;
  let fixture: ComponentFixture<InsertOrganizationalUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertOrganizationalUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertOrganizationalUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
