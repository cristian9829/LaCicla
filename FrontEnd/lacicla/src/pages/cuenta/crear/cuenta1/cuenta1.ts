import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Cuenta2Page } from '../cuenta2/cuenta2';
import { Usuario } from '../../../../app/models/Usuario';

/**
 * Generated class for the Cuenta1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cuenta1',
  templateUrl: 'cuenta1.html',
})
export class Cuenta1Page {

  txtUsuario: string;
  txtPassword: string;
  txtEmail: string;
  constructor(public navCtrl: NavController
    , public navParams: NavParams,
    public user: Usuario,
    public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Cuenta1Page');
  }

  registrar2() {
    if (this.txtPassword.length < 8) {
      this.presentToast('La contraseña debe tener minimo 8 caracteres');
    } else {
      console.log(this.txtUsuario);
      this.user.idusuario = this.txtUsuario;
      this.user.password = this.txtPassword;
      this.user.email = this.txtEmail;
      this.navCtrl.push(Cuenta2Page, {
        data: this.user
      });
    }
  }

  presentToast(mensaje: string) {
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 4000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}
