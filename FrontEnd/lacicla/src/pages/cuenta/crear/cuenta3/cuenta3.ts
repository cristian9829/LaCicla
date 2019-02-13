import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Usuario } from '../../../../app/models/Usuario';
import { UserserviceProvider } from '../../../../providers/userservice/userservice';
import { HttpErrorResponse } from '../../../../../node_modules/@angular/common/http';
import { IniciosesionPage } from '../../iniciosesion/iniciosesion';

/**
 * Generated class for the Cuenta3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cuenta3',
  templateUrl: 'cuenta3.html',
})
export class Cuenta3Page {

  txtCelular: string;
  txtDireccion: string;
  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , public user: Usuario
    , public user_service: UserserviceProvider
    , private toastCtrl: ToastController) {
    this.user = navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Cuenta3Page');
  }

  crearUsuario() {
    this.user.celular = this.txtCelular;
    this.user.direccion = this.txtDireccion;
    this.user.password_confirmation = this.user.password;
    console.log(this.user);
    this.user_service.create(this.user).subscribe(
      (data: any) => {
        this.presentToast('Usuario Registrado!');
        this.navCtrl.push(IniciosesionPage);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          this.presentToast('Error: ' + err.error.message);
          console.log('Un error ha ocurrido', err.error.message);
        } else {
          this.presentToast('Error: ' + err.status);
          console.log(`Backend ha regresado un error ${err.status}, body fue ${err.error}`);
        }
      });;
  }

  presentToast(mensaje:string) {
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}
