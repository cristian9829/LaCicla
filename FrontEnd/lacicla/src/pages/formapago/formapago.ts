import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AgregarFormaPagoPage } from '../agregar-forma-pago/agregar-forma-pago';
import { UserserviceProvider } from '../../providers/userservice/userservice';
import { Tarjeta } from '../../app/models/Tarjeta';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the FormapagoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-formapago',
  templateUrl: 'formapago.html',
})
export class FormapagoPage {
  id_user:number;
  list_tarjetas: Tarjeta[];
  consultado:boolean = false;
  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , public user_service: UserserviceProvider
    , public tarjetas: Tarjeta
    , public storage: Storage) {
  }

  ionViewDidLoad() {
    this.obtenerTarjetas();
 }

  ionViewWillEnter() {
    this.obtenerTarjetas();
  }

  obtenerTarjetas(){
    this.storage.get('id_user').then((val) => {
      this.user_service.obtenerTarjetaPorId(val).subscribe(
        (data: any) => {
          this.consultado = true;
          this.list_tarjetas = data.data;
        },
        error => {
          console.error(error);
        }
      );
    });
  }

  agregarPago() {
    this.navCtrl.push(AgregarFormaPagoPage);
  }

}
