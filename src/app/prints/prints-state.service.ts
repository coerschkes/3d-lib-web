import {Injectable, Signal, signal} from "@angular/core";
import {Print} from "./print";

@Injectable({providedIn: "root"})
export class PrintsStateService {
  private _prints = signal<Print[]>([]);

  updatePrints(prints: Print[]) {
    this._prints.update(() => prints)
  }

  get prints(): Signal<Print[]> {
    return this._prints.asReadonly();
  }
}
