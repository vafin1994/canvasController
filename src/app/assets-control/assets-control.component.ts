import { Component } from '@angular/core';
import {AssetsControlService} from "../assets-control.service";

@Component({
  selector: 'app-assets-control',
  templateUrl: './assets-control.component.html',
  styleUrls: ['./assets-control.component.css']
})
export class AssetsControlComponent {

  constructor(private AssetsControlService: AssetsControlService) {
  }

  play(){
    this.AssetsControlService.playAll()
  }

  pause(){
    this.AssetsControlService.pauseAll();
  }

  mute(){
    this.AssetsControlService.muteAll();
  }
  unmute(){
    this.AssetsControlService.unmuteAll();
  }
}
