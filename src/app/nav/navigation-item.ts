export class NavigationItem {
  private readonly _routerLink: string;
  private readonly _linkName: string;

  constructor(routerLink: string, linkName: string) {
    this._routerLink = routerLink;
    this._linkName = linkName;
  }


  get routerLink(): string {
    return this._routerLink;
  }

  get linkName(): string {
    return this._linkName;
  }
}
