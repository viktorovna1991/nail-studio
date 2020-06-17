import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {SystemComponent} from './system/system.component';
import {MainComponent} from './system/main/main.component';
import {HeaderComponent} from './system/header/header.component';
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NewItemsComponent} from './system/new-items/new-items.component';
import {BestsellersComponent} from './system/bestsellers/bestsellers.component';
import {SaleItemsComponent} from './system/sale-items/sale-items.component';
import {BrowserModule} from '@angular/platform-browser';
import {FooterComponent} from './system/footer/footer.component';
import {PolishComponent} from './polish/polish.component';
import {LampeUVComponent} from './lampe-uv/lampe-uv.component';
import {ContactsComponent} from './contacts/contacts.component';
import {PolishPaletteComponent} from './polish/polish-palette/polish-palette.component';
import {DegreaserComponent} from './polish/degreaser/degreaser.component';
import {PrimerComponent} from './polish/primer/primer.component';
import {BasePolishComponent} from './polish/base-polish/base-polish.component';
import {TopPolishComponent} from './polish/top-polish/top-polish.component';
import {PolishRemoverComponent} from './polish/polish-remover/polish-remover.component';
import {ItemDescriptionComponent} from './polish/item-description/item-description.component';
import {ProductService} from './shared/services/product.service';
import {MatInputModule} from '@angular/material/input';
import {AppRoutingModule} from './app.routing.module';
import {BreadCrumbComponent} from './bread-crumb/bread-crumb.component';
import {DegreaserService} from './shared/services/degreaser.service';
import {PrimerService} from './shared/services/primer.service';
import {BaseService} from './shared/services/base.service';
import {TopService} from './shared/services/top.service';
import {RemoverService} from './shared/services/remover.service';
import {LampService} from './shared/services/lamp.service';
import {UvLampsComponent} from './lampe-uv/uv-lamps/uv-lamps.component';
import {LedLampsComponent} from './lampe-uv/led-lamps/led-lamps.component';
import {UvLedLampsComponent} from './lampe-uv/uv-led-lamps/uv-led-lamps.component';
import {AuthComponent} from './auth/auth.component';
import {LoginComponent} from './auth/login/login.component';
import {AuthService} from './shared/services/auth.service';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {UserService} from './shared/services/user.service';
import {HttpClientModule} from '@angular/common/http';
import {RegistrationComponent} from './auth/registration/registration.component';
import {BasketComponent} from './basket/basket.component';
import {MatTableModule} from '@angular/material/table';
import {CurrentCountService} from './shared/services/currentCount.service';
import {ConnectionComponent} from './basket/connection/connection.component';

@NgModule({
  declarations: [
    AppComponent,
    SystemComponent,
    MainComponent,
    HeaderComponent,
    NewItemsComponent,
    BestsellersComponent,
    BasketComponent,
    SaleItemsComponent,
    FooterComponent,
    PolishComponent,
    LampeUVComponent,
    ContactsComponent,
    PolishPaletteComponent,
    DegreaserComponent,
    PrimerComponent,
    BasePolishComponent,
    TopPolishComponent,
    PolishRemoverComponent,
    ItemDescriptionComponent,
    BreadCrumbComponent,
    UvLampsComponent,
    LedLampsComponent,
    UvLedLampsComponent,
    AuthComponent,
    LoginComponent,
    RegistrationComponent,
    ConnectionComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [
    ProductService,
    DegreaserService,
    PrimerService,
    BaseService,
    TopService,
    RemoverService,
    LampService,
    AuthService,
    UserService,
    CurrentCountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
