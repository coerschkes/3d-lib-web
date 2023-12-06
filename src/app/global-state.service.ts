import {Injectable} from "@angular/core";
import {NavStateService} from "./nav/nav-state.service";
import {PrintsStateService} from "./prints/prints-state.service";
import {NavigationItem} from "./nav/navigation-item";
import {Print} from "./prints/print";

@Injectable({providedIn: "root"})
export class GlobalStateService {
  private navState: NavStateService;
  private printsState: PrintsStateService;

  constructor(navState: NavStateService, printsState: PrintsStateService) {
    this.navState = navState;
    this.printsState = printsState;
    this.initialize()
  }

  private initialize() {
    this.navState.updateAppName('3d Library')
    this.navState.updateNavigationItems([
      new NavigationItem('', 'Home'),
      new NavigationItem('prints', 'Prints')
    ])
    this.printsState.updatePrints([
      new Print('test1', 'test1 description', 'img1 here'),
      new Print('test2', 'test2 description', 'img2 here'),
      new Print('test3', 'test3 description', 'img3 here')
    ])
  }
}
