import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {AssetsStoreService} from "../assets-store.service";

@Component({
  selector: 'app-url-input-form',
  templateUrl: './url-input-form.component.html',
  styleUrls: ['./url-input-form.component.css']
})
export class UrlInputFormComponent {
  urlRegExp = '^(http(s):\\/\\/.)[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)$';
  assetUrl: FormControl = new FormControl('', [Validators.required, Validators.pattern(this.urlRegExp)])

  constructor(private AssetsStoreService: AssetsStoreService){}

  public addAsset(){
    console.log(this.assetUrl);
    this.AssetsStoreService.addAsset(this.assetUrl.value);
  }
}
