import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertLabWorkstationComponent } from './insert-lab-workstation.component';

describe('InsertLabWorkstationComponent', () => {
  let component: InsertLabWorkstationComponent;
  let fixture: ComponentFixture<InsertLabWorkstationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertLabWorkstationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertLabWorkstationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
