import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {FlickrService} from "./flickr.service";
import { PhotoComponent } from './photos/photo.component';
import { PhotoListComponent } from './photos/photo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoComponent,
    PhotoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FlickrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
