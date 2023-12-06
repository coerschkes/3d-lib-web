import {Injectable, Signal, signal} from "@angular/core";
import {ToolbarContent} from "./toolbar-content";
import {NavigationItem} from "./navigation-item";

@Injectable({providedIn: "root"})
export class NavStateService {
  private _appName = signal<string>('');
  private _toolbarContent = signal<ToolbarContent[]>([]);
  private _navigationItems = signal<NavigationItem[]>([]);


  updateAppName(appName: string) {
    this._appName.update(() => appName);
  }

  get appName(): Signal<string> {
    return this._appName.asReadonly();
  }

  updateToolbarContent(content: ToolbarContent[]) {
    this._toolbarContent.update(() => content)
  }

  get toolbarContent(): Signal<ToolbarContent[]> {
    return this._toolbarContent.asReadonly();
  }

  updateNavigationItems(navItems: NavigationItem[]) {
    this._navigationItems.update(() => navItems)
  }

  get navigationItems(): Signal<NavigationItem[]> {
    return this._navigationItems.asReadonly();
  }
}
