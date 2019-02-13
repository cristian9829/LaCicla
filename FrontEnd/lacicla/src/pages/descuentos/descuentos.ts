import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '../../../node_modules/@angular/forms';
import { Descuento } from '../../app/models/Descuentos';
import { UserserviceProvider } from '../../providers/userservice/userservice';


@IonicPage()
@Component({
  selector: 'page-descuentos',
  templateUrl: 'descuentos.html',
})
export class DescuentosPage {
  
  descuento: Descuento;
  consultado: boolean = false;
  private todo: FormGroup;
  txtNumeroCupon: string;
  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , private formBuilder: FormBuilder
    , private user_service: UserserviceProvider
    , private toastCtrl: ToastController) {
    this.todo = this.formBuilder.group({
      txtNumeroCupon: ['', Validators.required],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DescuentosPage');
  }

  obtenerDescuentos() {
     this.user_service.obtenerDescuentos(this.todo.value.txtNumeroCupon).subscribe(
        (data: any) => {
          console.log(data);
          this.consultado = true;
          if (data.message != "No existe") {
            this.presentToast("Se ha validado tu ticket de Descuento!");
            this.descuento = data.data[0];
          }else{
            this.presentToast(data.message);
          }
        },
        error => {
          console.error(error);
        }
      );

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
