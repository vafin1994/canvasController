import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {AssetsStoreService} from "../assets-store.service";

@Component({
  selector: 'app-url-input-form',
  templateUrl: './url-input-form.component.html',
  styleUrls: ['./url-input-form.component.css']
})
export class UrlInputFormComponent {
  assetUrl: FormControl = new FormControl('', [Validators.required])

  constructor(private AssetsStoreService: AssetsStoreService){}

  public addAsset(){
    this.AssetsStoreService.addAsset(this.assetUrl.value);
  }
}
