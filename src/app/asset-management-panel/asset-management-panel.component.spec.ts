import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetManagementPanelComponent } from './asset-management-panel.component';

describe('AssetManagementPanelComponent', () => {
  let component: AssetManagementPanelComponent;
  let fixture: ComponentFixture<AssetManagementPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetManagementPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetManagementPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
