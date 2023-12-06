import {Injectable, signal, WritableSignal} from "@angular/core";
import {ToolbarContent} from "./toolbar-content";
import {NavigationItem} from "./navigation-item";

@Injectable({providedIn: "root"})
export class NavStateService {
  private _appName = signal<string>('');
  private _toolbarContents = signal<ToolbarContent[]>([]);
  private _navigationItems = signal<NavigationItem[]>([]);


  get appName(): WritableSignal<string> {
    return this._appName;
  }

  get toolbarContents(): WritableSignal<ToolbarContent[]> {
    return this._toolbarContents;
  }

  get navigationItems(): WritableSignal<NavigationItem[]> {
    return this._navigationItems;
  }
}
