import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cuenta1Page } from '../cuenta/crear/cuenta1/cuenta1';
import { IniciosesionPage } from '../cuenta/iniciosesion/iniciosesion';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  registrar(){
    this.navCtrl.push(Cuenta1Page);
  }

  iniciarSesion(){
    this.navCtrl.push(IniciosesionPage);
  }

}
