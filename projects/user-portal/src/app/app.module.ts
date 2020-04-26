import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SystemComponent } from './system/system.component';
import { MainComponent } from './system/main/main.component';
import { HeaderComponent } from './system/header/header.component';
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SystemComponent,
    MainComponent,
    HeaderComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
