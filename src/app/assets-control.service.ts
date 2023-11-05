import { Injectable } from '@angular/core';
import {Observable, Subject, Subscription} from "rxjs";

export enum ListOfSignals{
  play,
  pause,
  mute,
  unmute,
}

@Injectable({
  providedIn: 'root'
})

export class AssetsControlService {
  public videoControl$: Subject<ListOfSignals> = new Subject();
  constructor() { }

  public playAll(){
    this.videoControl$.next(ListOfSignals.play);
  }

  public pauseAll(){
    this.videoControl$.next(ListOfSignals.pause);
  }

  public muteAll() {
    this.videoControl$.next(ListOfSignals.mute);
  }

  public unmuteAll() {
    this.videoControl$.next(ListOfSignals.unmute);
  }
}
