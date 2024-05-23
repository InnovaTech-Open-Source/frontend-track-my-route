import { Component } from '@angular/core';
import {MatDrawer, MatDrawerContainer} from "@angular/material/sidenav";
import {MatToolbar} from "@angular/material/toolbar";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatDrawerContent} from "@angular/material/sidenav";
import {MatButton} from "@angular/material/button";
import {NgClass, NgIf} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {PayTicketComponent} from "../../pages/pay-ticket/pay-ticket.component";
import {PromosComponent} from "../../pages/promos/promos.component";
import {HelpComponent} from "../../pages/help/help.component";
import {SearchRoutesComponent} from "../../pages/search-routes/search-routes.component";
import {NotificationsComponent} from "../../pages/notifications/notifications.component";
import {HistoryComponent} from "../../pages/history/history.component";
import {ConfigComponent} from "../../pages/config/config.component";
import {Router, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [
    MatDrawerContent,
    MatDrawerContainer,
    MatToolbar,
    MatNavList,
    MatListItem,
    MatDrawer,
    MatButton,
    NgIf,
    MatIcon,
    PayTicketComponent,
    HelpComponent,
    SearchRoutesComponent,
    NotificationsComponent,
    PromosComponent,
    HistoryComponent,
    ConfigComponent,
    RouterOutlet,
    NgClass,
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})

export class SideBarComponent {

  isDrawerOpen: boolean = true;

  constructor(private router: Router) {}

  isButtonClicked: boolean = false;
  isHistoryButtonClicked: boolean = false;
  isConfigButtonClicked: boolean = false;
  isNotificationsButtonClicked: boolean = false;
  isSearchRoutesButtonClicked: boolean = false;
  isPromosButtonClicked: boolean = false;
  isHelpButtonClicked: boolean = false;

  navigateTo(route: string) {
    this.router.navigateByUrl(route);
    this.isButtonClicked = route === '/sidebar/pay-ticket';
    this.isHistoryButtonClicked = route === '/sidebar/history';
    this.isConfigButtonClicked = route === '/sidebar/config';
    this.isNotificationsButtonClicked = route === '/sidebar/notifications';
    this.isSearchRoutesButtonClicked = route === '/sidebar/search';
    this.isPromosButtonClicked = route === '/sidebar/promos';
    this.isHelpButtonClicked = route === '/sidebar/help';
  }



}
