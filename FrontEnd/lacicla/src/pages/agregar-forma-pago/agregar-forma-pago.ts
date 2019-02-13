import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Tarjeta } from '../../app/models/Tarjeta';
import { UserserviceProvider } from '../../providers/userservice/userservice';
import { HttpErrorResponse } from '../../../node_modules/@angular/common/http';
import { Storage } from '@ionic/storage';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';

@IonicPage()
@Component({
  selector: 'page-agregar-forma-pago',
  templateUrl: 'agregar-forma-pago.html',
})
export class AgregarFormaPagoPage {
  
  private todo : FormGroup;
  
  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , public tarjeta: Tarjeta
    , public user_service: UserserviceProvider
    , private toastCtrl: ToastController
    , private storage: Storage
    , private formBuilder: FormBuilder) 
    {
      this.todo = this.formBuilder.group({
        txtNumeroTarjeta: ['', Validators.required],
        txtFechaVencimiento: ['',Validators.required],
        txtCodigo: ['',Validators.required]
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarFormaPagoPage');
  }

  guardar() {
    this.tarjeta.codigo = this.todo.value.txtCodigo;
    this.tarjeta.fecha = this.todo.value.txtFechaVencimiento;
    this.tarjeta.numero = this.todo.value.txtNumeroTarjeta;
    console.log(this.tarjeta);
    this.storage.get('id_user').then((val) => {
      this.tarjeta.id_usuario = val;
      this.user_service.createTarjeta(this.tarjeta).subscribe(
        (data: any) => {
          this.presentToast('Tarjeta Registrada!');
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            this.presentToast('Error: ' + err.error.message);
            console.log('Un error ha ocurrido', err.error.message);
          } else {
            this.presentToast('Error: ' + err.status);
            console.log(`Backend ha regresado un error ${err.status}, body fue ${err.error}`);
          }
        });
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
