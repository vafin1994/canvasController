import {AfterContentChecked, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AssetsStoreService} from "../assets-store.service";
import {AssetsControlService, ListOfSignals} from "../assets-control.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-canvas-item',
  templateUrl: './canvas-item.component.html',
  styleUrls: ['./canvas-item.component.css']
})
export class CanvasItemComponent implements OnInit, OnDestroy, AfterContentChecked {
  @ViewChild('videoElement') videoElement!: ElementRef;
  @ViewChild('imageElement') imageElement!: ElementRef;
  @Input() asset!: string;

  videoSubscription$!: Subscription;

  assetDimensions: { x: number; y: number; width: number; height: number; } | undefined;

  constructor(private AssetsControlService: AssetsControlService) {
  }

  ngOnInit() {
    this.videoSubscription$ = this.AssetsControlService.videoControl$.subscribe(
      (signal: ListOfSignals) => {
        this.handleSignal(signal);
      }
    )
  }

  ngOnDestroy() {
    this.videoSubscription$.unsubscribe();
  }

  ngAfterContentChecked() {
    this.getDimensions();
  }

  isVideoUrl(): boolean {
    // Check if the URL ends with a video extension (e.g., .mp4)
    return /\.(mp4|webm|ogg)$/i.test(this.asset);
  }

  private handleSignal(signal: ListOfSignals){
    if(!this.videoElement){
      return;
    }
    if (signal === ListOfSignals.play) {
      this.playVideo();
    }
    if (signal === ListOfSignals.pause){
      this.pauseVideo();
    }
    if(signal === ListOfSignals.mute){
      this.muteVideo();
    }
    if(signal === ListOfSignals.unmute){
      this.unmuteVideo();
    }
  }

  playVideo() {
    this.videoElement?.nativeElement.play()
  }

  pauseVideo() {
    this.videoElement?.nativeElement?.pause()
  }

  muteVideo() {
    this.videoElement.nativeElement.muted = true;
  }

  unmuteVideo(){
    this.videoElement.nativeElement.muted = false;
  }

  getDimensions() {
    let elDomRect: DOMRect | undefined;
    if(this.videoElement){
      elDomRect = this.videoElement.nativeElement.getBoundingClientRect();
    }
    if(this.imageElement){
      elDomRect = this.imageElement.nativeElement.getBoundingClientRect();
    }
    if(elDomRect){
      this.assetDimensions = {x: elDomRect.x + window.scrollX, y: elDomRect.y + window.scrollY, width: elDomRect.width, height: elDomRect.height}
    }
  }

}
