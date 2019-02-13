import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { Cuenta1Page } from '../pages/cuenta/crear/cuenta1/cuenta1';
import { Cuenta2Page } from '../pages/cuenta/crear/cuenta2/cuenta2';
import { Cuenta3Page } from '../pages/cuenta/crear/cuenta3/cuenta3';
import { IniciosesionPage } from '../pages/cuenta/iniciosesion/iniciosesion';
import { Geolocation } from '@ionic-native/geolocation';
import { MapaPage } from '../pages/mapa/mapa';
import { RecorridosPage } from '../pages/recorridos/recorridos';
import { ResumenrecorridosPage } from '../pages/resumenrecorridos/resumenrecorridos';
import { FormapagoPage } from '../pages/formapago/formapago';
import { SuscripcionPage } from '../pages/suscripcion/suscripcion';
import { DescuentosPage } from '../pages/descuentos/descuentos';
import { Usuario } from './models/Usuario';
import { UserserviceProvider } from '../providers/userservice/userservice';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { Auth } from './models/Auth';
import { Authent } from './models/authent';
import { AgregarFormaPagoPage } from '../pages/agregar-forma-pago/agregar-forma-pago';
import { Tarjeta } from './models/Tarjeta';
import { Descuento } from './models/Descuentos';
import { Recorrido } from './models/Recorridos';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    Cuenta1Page,
    Cuenta2Page,
    Cuenta3Page,
    IniciosesionPage,
    MapaPage,
    RecorridosPage,
    ResumenrecorridosPage,
    FormapagoPage,
    SuscripcionPage,
    DescuentosPage,
    AgregarFormaPagoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    Cuenta1Page,
    Cuenta2Page,
    Cuenta3Page,
    IniciosesionPage,
    MapaPage,
    RecorridosPage,
    ResumenrecorridosPage,
    FormapagoPage,
    SuscripcionPage,
    DescuentosPage,
    AgregarFormaPagoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Usuario,
    HttpClientModule,
    UserserviceProvider,
    Storage,
    Auth,
    Authent,
    Tarjeta,
    Descuento,
    Recorrido,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserserviceProvider
  ]
})
export class AppModule {}
