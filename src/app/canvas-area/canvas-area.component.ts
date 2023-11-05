import { Component } from '@angular/core';
import {AssetsStoreService} from "../assets-store.service";

@Component({
  selector: 'app-canvas-area',
  templateUrl: './canvas-area.component.html',
  styleUrls: ['./canvas-area.component.css']
})
export class CanvasAreaComponent {
  constructor(private AssetsStoreService: AssetsStoreService) {
  }

  public getAssets(): string[]{
    return this.AssetsStoreService.allAssets;
  }

  removeAsset(asset: string){
    this.AssetsStoreService.removeAsset(asset);
  }
}
