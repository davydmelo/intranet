import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asset-management-panel',
  templateUrl: './asset-management-panel.component.html',
  styleUrls: ['./asset-management-panel.component.css']
})
export class AssetManagementPanelComponent implements OnInit {

  panel: number = 0;

  constructor() { }

  ngOnInit() {

    this.panel = 5;
  }

}
