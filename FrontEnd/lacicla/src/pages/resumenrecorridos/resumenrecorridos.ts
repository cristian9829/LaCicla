import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserserviceProvider } from '../../providers/userservice/userservice';
import { Recorrido } from '../../app/models/Recorridos';
import { Storage } from '@ionic/storage';
@IonicPage()
@Component({
  selector: 'page-resumenrecorridos',
  templateUrl: 'resumenrecorridos.html',
})
export class ResumenrecorridosPage {
  consultado: boolean = false;
  recorridos: Recorrido[];
  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , public service: UserserviceProvider
    , public recorridos_: Recorrido
    , public storage: Storage) {
    // this.recorridos = [
    //   { distancia: '15 Km', tiempo: '15:25', bicicleta: 'Model A' },
    //   { distancia: '10 Km', tiempo: '8:25', bicicleta: 'Model B' },
    //   { distancia: '20 Km', tiempo: '45:25', bicicleta: 'Model C' }
    // ]
  }

  ionViewDidLoad() {
    this.obtenerRecorridos();
  }

  obtenerRecorridos() {
    this.storage.get('id_user').then((val) => {
      this.service.obtenerRecorridoPorId(val).subscribe(
        (data: any) => {
          console.log(data);
          this.consultado = true;
          this.recorridos = data.data;
        },
        error => {
          console.error(error);
        }
      );
    });
  }


}
