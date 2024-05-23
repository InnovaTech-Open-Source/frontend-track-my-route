import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayTicketComponent } from './public/pages/pay-ticket/pay-ticket.component';
import { HistoryComponent } from './public/pages/history/history.component';
import { ConfigComponent } from './public/pages/config/config.component';
import {NotificationsComponent} from './public/pages/notifications/notifications.component';
import {SearchRoutesComponent} from './public/pages/search-routes/search-routes.component';
import {PromosComponent} from './public/pages/promos/promos.component';
import {HelpComponent} from './public/pages/help/help.component';
import {RegisterComponent} from './public/pages/register/register.component';
import {LoginComponent} from './public/pages/login/login.component';
import {SideBarComponent} from "./public/components/side-bar/side-bar.component";

export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sidebar', component: SideBarComponent, children: [
      { path: 'pay-ticket', component: PayTicketComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: 'search', component: SearchRoutesComponent },
      { path: 'promos', component: PromosComponent },
      { path: 'history', component: HistoryComponent },
      { path: 'help', component: HelpComponent },
      { path: 'config', component: ConfigComponent },
    ]},
  { path: '', redirectTo: '/register', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
