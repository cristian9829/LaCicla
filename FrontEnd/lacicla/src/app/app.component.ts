import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { RecorridosPage } from '../pages/recorridos/recorridos';
import { FormapagoPage } from '../pages/formapago/formapago';
import { SuscripcionPage } from '../pages/suscripcion/suscripcion';
import { DescuentosPage } from '../pages/descuentos/descuentos';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any, icon: string }>;

  constructor(public platform: Platform
    , public statusBar: StatusBar
    , public splashScreen: SplashScreen
    , public storage: Storage) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Recorridos', component: RecorridosPage, icon: 'bicycle' },
      { title: 'Forma de Pago', component: FormapagoPage, icon: 'card' },
      { title: 'Suscripcion', component: SuscripcionPage, icon: 'paper' },
      { title: 'Descuentos', component: DescuentosPage, icon: 'remove-circle' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logout() {
    this.storage.remove('token')
    this.nav.push(LoginPage);
  }

  openPage(page) {
    this.nav.push(page.component);
  }
}
