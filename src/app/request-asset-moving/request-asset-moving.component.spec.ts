import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAssetMovingComponent } from './request-asset-moving.component';

describe('RequestAssetMovingComponent', () => {
  let component: RequestAssetMovingComponent;
  let fixture: ComponentFixture<RequestAssetMovingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestAssetMovingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestAssetMovingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
