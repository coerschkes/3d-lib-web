import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import {PrintsComponent} from "./prints/prints.component";
import {NavComponent} from "./nav/nav.component";
import {GlobalStateService} from "./global-state.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PrintsComponent, NavComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private globalState: GlobalStateService;

  constructor(globalState: GlobalStateService) {
    this.globalState = globalState;
  }
}
