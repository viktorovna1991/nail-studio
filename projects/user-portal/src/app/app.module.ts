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
import { FooterComponent } from './system/footer/footer.component';
import {RouterModule} from '@angular/router';
import { PolishComponent } from './polish/polish.component';
import { LampeUVComponent } from './lampe-uv/lampe-uv.component';
import { InstrumentsComponent } from './instruments/instruments.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PolishPaletteComponent } from './polish/polish-palette/polish-palette.component';
import { DegreaserComponent } from './polish/degreaser/degreaser.component';
import { PrimerComponent } from './polish/primer/primer.component';
import { BasePolishComponent } from './polish/base-polish/base-polish.component';
import { TopPolishComponent } from './polish/top-polish/top-polish.component';
import { PolishRemoverComponent } from './polish/polish-remover/polish-remover.component';
import { ItemDescriptionComponent } from './polish/item-description/item-description.component';
import {ProductService} from './shared/services/product.service';
import {MatInputModule} from '@angular/material/input';

const routes = [
  {path: '', component: SystemComponent},
  {path: 'polish', component: PolishComponent},
  {path: 'basePolish', component: BasePolishComponent},
  {path: 'degreaser', component: DegreaserComponent},
  {path: 'polishPalette', component: PolishPaletteComponent},
  {path: 'polishRemover', component: PolishRemoverComponent},
  {path: 'primer', component: PrimerComponent},
  {path: 'topPolish', component: TopPolishComponent},
  {path: 'lampesUV', component: LampeUVComponent},
  {path: 'instruments', component: InstrumentsComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'itemDescription', component: ItemDescriptionComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SystemComponent,
    MainComponent,
    HeaderComponent,
    NewItemsComponent,
    BestsellersComponent,
    SaleItemsComponent,
    FooterComponent,
    PolishComponent,
    LampeUVComponent,
    InstrumentsComponent,
    ContactsComponent,
    PolishPaletteComponent,
    DegreaserComponent,
    PrimerComponent,
    BasePolishComponent,
    TopPolishComponent,
    PolishRemoverComponent,
    ItemDescriptionComponent
  ],
    imports: [
        RouterModule.forRoot(routes),
        BrowserModule,
        BrowserAnimationsModule,
        MatTabsModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,
        FormsModule,
        MatInputModule
    ],
  providers: [ ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
