import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertLabEventComponent } from './insert-lab-event.component';

describe('InsertLabEventComponent', () => {
  let component: InsertLabEventComponent;
  let fixture: ComponentFixture<InsertLabEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertLabEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertLabEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
