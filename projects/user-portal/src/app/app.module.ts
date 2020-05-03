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
import { NewItemsComponent } from './system/new-items/new-items.component';
import { BestsellersComponent } from './system/bestsellers/bestsellers.component';
import { SaleItemsComponent } from './system/sale-items/sale-items.component';
import {BrowserModule} from '@angular/platform-browser';


@NgModule({
  declarations: [
    AppComponent,
    SystemComponent,
    MainComponent,
    HeaderComponent,
    NewItemsComponent,
    BestsellersComponent,
    SaleItemsComponent
  ],
  imports: [
    BrowserModule,
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
