import {Injectable, signal, WritableSignal} from "@angular/core";
import {Print} from "./print";

@Injectable({providedIn: "root"})
export class PrintsStateService {
  private _prints = signal<Print[]>([]);

  get prints(): WritableSignal<Print[]> {
    return this._prints;
  }
}
