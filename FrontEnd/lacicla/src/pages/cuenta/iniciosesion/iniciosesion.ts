import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapaPage } from '../../mapa/mapa';
import { Auth } from '../../../app/models/Auth';
import { UserserviceProvider } from '../../../providers/userservice/userservice';
import { HttpErrorResponse } from '../../../../node_modules/@angular/common/http';
import { Authent } from '../../../app/models/authent';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { FormGroup, FormBuilder, Validators } from '../../../../node_modules/@angular/forms';
/**
 * Generated class for the IniciosesionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-iniciosesion',
  templateUrl: 'iniciosesion.html',
})
export class IniciosesionPage {
  private todo : FormGroup;
  
  // txtEmail: string;
  // txtPassword: string;
  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , private auth: Auth
    , private authent: Authent
    , private user_service: UserserviceProvider
    , private toastCtrl: ToastController
    , private storage: Storage
    , private formBuilder: FormBuilder) {
      this.todo = this.formBuilder.group({
        txtEmail: ['', Validators.required],
        txtPassword: ['',Validators.required],
      });
  }

  ionViewDidLoad() {
    this.storage.get('token').then((val) => {
      console.log(val);
      if (val != null) {
        this.navCtrl.push(MapaPage);
      }
    });
  }
  
  logForm() {
    this.auth.email = this.todo.value.txtEmail;
    this.auth.password = this.todo.value.txtPassword;
    this.authent.auth = this.auth;
    console.log(this.authent);
    this.user_service.validateUser(this.authent).subscribe(
      (data: any) => {
        console.log(data);
        if (data != undefined) {
          this.storage.set('token', data.data.token);
          this.storage.set('id_user', data.data.payload.sub);
          console.log(data.data.token);
          console.log(data.data.payload.sub);
          this.navCtrl.push(MapaPage);

        } else {
          this.presentToast('Usuario o Password Invalida');
        }
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          this.presentToast('Usuario o Password Invalida');
          console.log('Un error ha ocurrido', err.error.message);
        } else {
          console.log(`Backend ha regresado un error ${err.status}, body fue ${err.error}`);
          this.presentToast('Usuario o Password Invalida');
        }
      });

  }
  presentToast(mensaje: string) {
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
