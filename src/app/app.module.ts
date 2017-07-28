import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from "clarity-angular";
import { AppComponent } from './app.component';
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
    NavigatorComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/**ng new base
npm install @webcomponents/custom-elements@1.0.0 --save
npm install mutationobserver-shim@0.3.2 --save
npm install clarity-icons --save
npm install clarity-ui --save
npm install clarity-angular --save */
