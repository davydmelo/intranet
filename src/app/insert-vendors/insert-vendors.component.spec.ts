import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertVendorsComponent } from './insert-vendors.component';

describe('InsertVendorsComponent', () => {
  let component: InsertVendorsComponent;
  let fixture: ComponentFixture<InsertVendorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertVendorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertVendorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
