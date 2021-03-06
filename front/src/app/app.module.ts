import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {AuthComponent} from './auth/auth.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthService} from './services/auth.service';
import {FourOhFourComponent} from './erreur/404/four-oh-four.component';
import {AuthGuard} from './services/auth-guard.service';
import {DetailEntretienComponent} from './entretien/detail/detail-entretien.component';
import {AddEntretienComponent} from './entretien/add/add-entretien.component';
import {ListEntretienComponent} from './entretien/list/list-entretien.component';
import {ItemEntretienComponent} from './entretien/item/item-entretien.component';
import {ListVoitureComponent} from './voiture/list/list-voiture.component';
import {DetailVoitureComponent} from './voiture/detail/detail-voiture.component';
import {ItemVoitureComponent} from './voiture/item/item-voiture.component';
import {ProprietaireService} from './services/proprietaire.service';
import {VoitureService} from './services/voiture.service';
import {EntretienService} from './services/entretien.service';
import {ListProprietaireComponent} from './proprietaire/list/list-proprietaire.component';
import {DetailProprietaireComponent} from './proprietaire/detail/detail-proprietaire.component';
import {ItemProprietaireComponent} from './proprietaire/item/item-proprietaire.component';
import {CarEasterEggComponent} from './easter-egg/car/car-easter-egg.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthorizationInterceptor} from './interceptor/http.interceptor';
import {AngularMyDatePickerModule} from 'angular-mydatepicker';
import {AddVoitureComponent} from './voiture/add/add-voiture.component';
import {AddProprietaireComponent} from './proprietaire/add/add-proprietaire.component';

const appRoutes: Routes = [
  { path: 'entretiens', canActivate: [AuthGuard], component: ListEntretienComponent },
  { path: 'entretiens/add', canActivate: [AuthGuard], component: AddEntretienComponent },
  { path: 'entretiens/:id', canActivate: [AuthGuard], component: DetailEntretienComponent },
  { path: 'voitures', canActivate: [AuthGuard], component: ListVoitureComponent },
  { path: 'voitures/edit/:id', canActivate: [AuthGuard], component: AddVoitureComponent },
  { path: 'voitures/add', canActivate: [AuthGuard], component: AddVoitureComponent },
  { path: 'voitures/:id', canActivate: [AuthGuard], component: DetailVoitureComponent },
  { path: 'proprietaires', canActivate: [AuthGuard], component: ListProprietaireComponent },
  { path: 'proprietaires/add', canActivate: [AuthGuard], component: AddProprietaireComponent },
  { path: 'proprietaires/:id', canActivate: [AuthGuard], component: DetailProprietaireComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', canActivate: [AuthGuard], component: ListEntretienComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: 'car', component: CarEasterEggComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    ListEntretienComponent,
    DetailEntretienComponent,
    AddEntretienComponent,
    ItemEntretienComponent,
    ListVoitureComponent,
    AddVoitureComponent,
    DetailVoitureComponent,
    ItemVoitureComponent,
    ListProprietaireComponent,
    DetailProprietaireComponent,
    AddProprietaireComponent,
    ItemProprietaireComponent,
    AuthComponent,
    FourOhFourComponent,
    CarEasterEggComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    AngularMyDatePickerModule
  ],
  providers: [
    ProprietaireService,
    VoitureService,
    EntretienService,
    AuthService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizationInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
