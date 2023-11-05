import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssetsStoreService {

  private assets: string[] = ['https://s3.us-east-2.amazonaws.com/vb-dev-media/moments/ads/reupload/avatar2-trailer-short.mp4',
    'https://s3.us-east-2.amazonaws.com/vb-dev-media/moments/ads/reupload/coca-cola-short.mp4',
    'Canvas3'];

  constructor() {
  }

  public addAsset(assetUrl: string): void {
    this.assets.push(assetUrl);
  }

  public removeAsset(assetUrl: string): void {
    const index = this.assets.indexOf(assetUrl);
    if (index !== -1) {
      this.assets.splice(index, 1);
    }
  }

  get allAssets(): string[]{
    return this.assets;
  }
}
