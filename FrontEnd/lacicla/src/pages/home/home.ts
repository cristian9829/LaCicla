import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';
import { MapaPage } from '../mapa/mapa';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  splash = true;
  constructor(public navCtrl: NavController
    , private storage: Storage) {

  }

  ionViewDidLoad() {
       setTimeout(() => {
      this.splash = false;
      this. storage.get('token').then((val) => {
        if(val != null && val != ''){
          this.navCtrl.push(MapaPage);
        }else{
          this.navCtrl.push(LoginPage)
        }
      });
    }, 4000);
  }
}
