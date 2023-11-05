import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {HeaderComponent} from './header/header.component';
import {MatInputModule} from "@angular/material/input";
import {UrlInputFormComponent} from './url-input-form/url-input-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CanvasAreaComponent} from './canvas-area/canvas-area.component';
import {CdkDrag, CdkDragHandle} from "@angular/cdk/drag-drop";
import { CanvasItemComponent } from './canvas-item/canvas-item.component';
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import { AssetsControlComponent } from './assets-control/assets-control.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UrlInputFormComponent,
    CanvasAreaComponent,
    CanvasItemComponent,
    AssetsControlComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    CdkDrag,
    CdkDragHandle,
    MatIconModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
