import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cuenta3Page } from '../cuenta3/cuenta3';
import { Usuario } from '../../../../app/models/Usuario';

/**
 * Generated class for the Cuenta2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cuenta2',
  templateUrl: 'cuenta2.html',
})
export class Cuenta2Page {

  txtNombre:string;
  txtApellido:string;
  txtDocumento:string;

  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , public user: Usuario) {
    this.user = navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Cuenta2Page');
  }

  registrar3() {
    this.user.nombre = this.txtNombre;
    this.user.apellido = this.txtApellido;
    this.user.documento = this.txtDocumento;
    this.navCtrl.push(Cuenta3Page,{
      data:this.user
    });
  }

}
