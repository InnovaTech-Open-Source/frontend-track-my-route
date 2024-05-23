import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {ConfigComponent} from "./public/pages/config/config.component";
import {HelpComponent} from "./public/pages/help/help.component";
import {HistoryComponent} from "./public/pages/history/history.component";
import {LoginComponent} from "./public/pages/login/login.component";
import {NotificationsComponent} from "./public/pages/notifications/notifications.component";
import {PayTicketComponent} from "./public/pages/pay-ticket/pay-ticket.component";
import {PromosComponent} from "./public/pages/promos/promos.component";
import {RecoveryPasswordComponent} from "./public/pages/recovery-password/recovery-password.component";
import {RegisterComponent} from "./public/pages/register/register.component";
import {SearchRoutesComponent} from "./public/pages/search-routes/search-routes.component";
import {SideBarComponent} from "./public/components/side-bar/side-bar.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ConfigComponent,
    HelpComponent,
    HistoryComponent,
    LoginComponent,
    NotificationsComponent,
    PayTicketComponent,
    PromosComponent,
    RecoveryPasswordComponent,
    RegisterComponent,
    SearchRoutesComponent,
    SideBarComponent
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
