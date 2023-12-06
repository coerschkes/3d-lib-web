import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import {PrintsComponent} from "./prints/prints.component";
import {NavComponent} from "./nav/nav.component";
import {NavStateService} from "./nav/nav-state.service";
import {NavigationItem} from "./nav/navigation-item";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PrintsComponent, NavComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '3d-lib-web';
  navState: NavStateService;

  constructor(navState: NavStateService) {
    this.navState = navState;
    this.initalize();
  }

  initalize() {
    this.navState.appName.update(() => '3d Library')
    this.navState.navigationItems.set([new NavigationItem('', 'Home'), new NavigationItem('prints', 'Prints')])
  }
}
