import {Component} from '@angular/core';
import {NgFor} from "@angular/common";
import {PrintsStateService} from "./prints-state.service";

@Component({
  selector: 'app-prints',
  standalone: true,
  imports: [NgFor],
  templateUrl: './prints.component.html',
  styleUrl: './prints.component.css'
})
export class PrintsComponent {
  printsState: PrintsStateService;

  constructor(printsState: PrintsStateService) {
    this.printsState = printsState;
  }
}
