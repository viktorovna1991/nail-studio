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
import {InstrumentsComponent} from './instruments/instruments.component';
import {ContactsComponent} from './contacts/contacts.component';
import {ItemDescriptionComponent} from './polish/item-description/item-description.component';

// const routes: Routes = [
//   {path: '', redirectTo: 'login', pathMatch: 'full'},
//   {path: 'system', loadChildren: './system/system.module#SystemModule'},
// ];
const routes: Routes = [
  {
    path: 'main', component: SystemComponent, data: {
      breadcrumb: 'Главная',
    }
  },
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
  {path: 'lampesUV', component: LampeUVComponent},
  {path: 'instruments', component: InstrumentsComponent},
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

