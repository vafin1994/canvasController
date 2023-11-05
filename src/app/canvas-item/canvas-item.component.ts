import {Component, Input} from '@angular/core';
import {AssetsStoreService} from "../assets-store.service";

@Component({
  selector: 'app-canvas-item',
  templateUrl: './canvas-item.component.html',
  styleUrls: ['./canvas-item.component.css']
})
export class CanvasItemComponent {
  @Input() asset!: string;

  constructor(private AssetsStoreService: AssetsStoreService){}



}
