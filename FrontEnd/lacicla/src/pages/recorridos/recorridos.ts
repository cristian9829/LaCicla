import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ResumenrecorridosPage } from '../resumenrecorridos/resumenrecorridos';
import { UserserviceProvider } from '../../providers/userservice/userservice';
import { Recorrido } from '../../app/models/Recorridos';
import { Storage } from '@ionic/storage';
import { HttpErrorResponse } from '../../../node_modules/@angular/common/http';
@IonicPage()
@Component({
  selector: 'page-recorridos',
  templateUrl: 'recorridos.html',
})
export class RecorridosPage {


  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , public service: UserserviceProvider
    , public recorrido: Recorrido
    , private toastCtrl: ToastController
    , public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecorridosPage');
  }

  resumen() {
    this.navCtrl.push(ResumenrecorridosPage)
  }

  simular() {
    console.log('Simulando');
    this.storage.get('id_user').then((val) => {
      this.recorrido.id_tarjeta = 1;
      this.recorrido.id_usuario = val;
      this.recorrido.idbicicleta = '1';
      this.recorrido.kilometrosrecorridos = 25;
      this.recorrido.puntofinal = 'Calle 45';
      this.recorrido.puntoinicial = 'Calle 170';
      this.recorrido.tarifa = "5500";
      console.log(this.recorrido);
      this.service.simularRecorridos(this.recorrido).subscribe(
        (data: any) => {
          this.presentToast('Recorrido Registrado!');
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
    });
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

  goBack() {
    this.navCtrl.pop();
  }

}
