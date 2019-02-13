import { Component, ViewChild } from '@angular/core';
import { NavController, MenuController, Menu, Nav, Platform, ToastController, AlertController } from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';

declare var google;

// @IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {
  map: any;
  men = Menu;

  @ViewChild(Nav) nav: Nav;
  rootPage: any = MapaPage;

  pages: Array<{ title: string }>;
  // rootPage: any = MapaPage;
  constructor(public navCtrl: NavController
    , private geolocation: Geolocation
    , public menuCtrl: MenuController
    , private toastCtrl: ToastController
    , private alertCtrl: AlertController
    , public platform: Platform) {
    this.pages = [
      { title: 'Home' },
      { title: 'List' },
      { title: 'Anotaciones' }
    ];
    platform.registerBackButtonAction(() => {
      let activeView = navCtrl.getActive().name;
      if (activeView == "MapaPage") {
        this.presentConfirm();
      }else{
        this.navCtrl.pop();
      }
    });
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Salir',
      message: 'Quieres cerrar LaCicla?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Salir',
          handler: () => {
            this.platform.exitApp();
          }
        }
      ]
    });
    alert.present();
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

  ionViewDidLoad() {
    this.getPosition();
  }
  getPosition(): any {
    this.geolocation.getCurrentPosition().then(response => {
      this.loadMap(response);
    })
      .catch(error => {
        console.log(error);
      })
  }



  loadMap(position: Geoposition) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    console.log(latitude, longitude);

    // create a new map by passing HTMLElement
    let mapEle: HTMLElement = document.getElementById('map');

    let myLatLng = { lat: latitude, lng: longitude };

    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      let marker = new google.maps.Marker({
        position: myLatLng,
        map: this.map,
        title: 'Hello World!'
      });
      mapEle.classList.add('show-map');
    });
  }

}