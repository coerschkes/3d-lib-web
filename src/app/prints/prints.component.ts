import {Component} from '@angular/core';
import {Print} from "./print";
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-prints',
  standalone: true,
  imports: [NgFor],
  templateUrl: './prints.component.html',
  styleUrl: './prints.component.css'
})
export class PrintsComponent {
  prints: Print[] = [
    new Print('test1', 'test1 description', 'img1 here'),
    new Print('test2', 'test2 description', 'img2 here'),
    new Print('test3', 'test3 description', 'img3 here'),
  ];
}
