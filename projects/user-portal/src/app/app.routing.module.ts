import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SystemComponent} from './system/system.component';
import {PolishComponent} from './polish/polish.component';
import {BasePolishComponent} from './polish/base-polish/base-polish.component';
import {DegreaserComponent} from './polish/degreaser/degreaser.component';
import {PolishPaletteComponent} from './polish/polish-palette/polish-palette.component';
import {PolishRemoverComponent} from './polish/polish-remover/polish-remover.component';
import {PrimerComponent} from './polish/primer/primer.component';
import {TopPolishComponent} from './polish/top-polish/top-polish.component';
import {LampeUVComponent} from './lampe-uv/lampe-uv.component';
import {ContactsComponent} from './contacts/contacts.component';
import {ItemDescriptionComponent} from './polish/item-description/item-description.component';
import {UvLampsComponent} from './lampe-uv/uv-lamps/uv-lamps.component';
import {LedLampsComponent} from './lampe-uv/led-lamps/led-lamps.component';
import {UvLedLampsComponent} from './lampe-uv/uv-led-lamps/uv-led-lamps.component';
import {LoginComponent} from './auth/login/login.component';
import {AuthComponent} from './auth/auth.component';
import {RegistrationComponent} from './auth/registration/registration.component';

// const routes: Routes = [
//   {path: '', redirectTo: 'login', pathMatch: 'full'},
//   {path: 'system', loadChildren: './system/system.module#SystemModule'},
// ];
const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {
    path: 'main', component: SystemComponent, data: {
      breadcrumb: 'Главная',
    }
  },
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'polish', component: PolishComponent},
  {path: 'basePolish', component: BasePolishComponent},
  {path: 'degreaser', component: DegreaserComponent, data: {
    breadcrumb: 'Обезжиреватели',
    }},
  {
    path: 'polishPalette', component: PolishPaletteComponent, data: {
      breadcrumb: 'Цветовая палитра',
    }
  },
  {path: 'polishRemover', component: PolishRemoverComponent},
  {path: 'primer', component: PrimerComponent},
  {path: 'topPolish', component: TopPolishComponent},
  {path: 'lampsUV', component: LampeUVComponent},
  {path: 'uvLamps', component: UvLampsComponent},
  {path: 'ledLamps', component: LedLampsComponent},
  {path: 'uvLedLamps', component: UvLedLampsComponent},
  {path: 'contacts', component: ContactsComponent},
  {
    path: 'itemDescription', component: ItemDescriptionComponent, data: {
      breadcrumb: 'Описание',
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

