import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ClarityModule } from "clarity-angular";
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { RequestAssetMovingComponent } from './request-asset-moving/request-asset-moving.component';
import { InsertAssetComponent } from './insert-asset/insert-asset.component';
import { InsertOrganizationalUnitComponent } from './insert-organizational-unit/insert-organizational-unit.component';
import { InsertLabWorkstationComponent } from './insert-lab-workstation/insert-lab-workstation.component';
import { InsertLabEventComponent } from './insert-lab-event/insert-lab-event.component';
import { InsertLabWorkstationReservationComponent } from './insert-lab-workstation-reservation/insert-lab-workstation-reservation.component';
import { InsertOrganizationalUnitReservationComponent } from './insert-organizational-unit-reservation/insert-organizational-unit-reservation.component';
import { InsertClassComponent } from './insert-class/insert-class.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { LoginComponent } from './login/login.component';
import { InsertClassSessionComponent } from './insert-class-session/insert-class-session.component';
import { InsertUserComponent } from './insert-user/insert-user.component';
import { NavigatorComponent } from './navigator/navigator.component';

import { HttpClientModule } from '@angular/common/http';

import {VendorService} from './vendor.service';
import { ListVendorsComponent } from './list-vendors/list-vendors.component';
import { InsertVendorsComponent } from './insert-vendors/insert-vendors.component';
import { AssetManagementPanelComponent } from './asset-management-panel/asset-management-panel.component';

const appRoutes: Routes = [
  { path: 'vendor', component: AssetManagementPanelComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    RequestAssetMovingComponent,
    InsertAssetComponent,
    InsertOrganizationalUnitComponent,
    InsertLabWorkstationComponent,
    InsertLabEventComponent,
    InsertLabWorkstationReservationComponent,
    InsertOrganizationalUnitReservationComponent,
    InsertClassComponent,
    SendMessageComponent,
    LoginComponent,
    InsertClassSessionComponent,
    InsertUserComponent,
    NavigatorComponent,
    ListVendorsComponent,
    InsertVendorsComponent,
    AssetManagementPanelComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ClarityModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [VendorService],
  bootstrap: [AppComponent]
})
export class AppModule { }

/**ng new base
npm install @webcomponents/custom-elements@1.0.0 --save
npm install mutationobserver-shim@0.3.2 --save
npm install clarity-icons --save
npm install clarity-ui --save
npm install clarity-angular --save */
