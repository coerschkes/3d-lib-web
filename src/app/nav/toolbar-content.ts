export class ToolbarContent {
  private readonly _routerLink: string;
  private readonly _tooltip: string;
  private readonly _icon: string;

  constructor(routerLink: string, tooltip: string, icon: string) {
    this._routerLink = routerLink;
    this._tooltip = tooltip;
    this._icon = icon;
  }


  get routerLink(): string {
    return this._routerLink;
  }

  get tooltip(): string {
    return this._tooltip;
  }

  get icon(): string {
    return this._icon;
  }
}
