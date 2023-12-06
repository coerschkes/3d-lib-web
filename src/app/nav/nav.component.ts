import {Component} from '@angular/core';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {RouterLink} from "@angular/router";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {NavStateService} from "./nav-state.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    RouterLink,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    NgForOf
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  navigationState: NavStateService;

  constructor(navigationState: NavStateService) {
    this.navigationState = navigationState;
  }
}
