import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertClassSessionComponent } from './insert-class-session.component';

describe('InsertClassSessionComponent', () => {
  let component: InsertClassSessionComponent;
  let fixture: ComponentFixture<InsertClassSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertClassSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertClassSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
