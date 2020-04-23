import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SystemComponent } from './system/system.component';
import { MainComponent } from './system/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    SystemComponent,
    MainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
