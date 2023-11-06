import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreviewPageComponent } from './preview-page/preview-page.component';
import { PreviewTrackComponent } from './preview-page/preview-track/preview-track.component';
import { PlayBarComponent } from './play-bar/play-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    PreviewPageComponent,
    PreviewTrackComponent,
    PlayBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
