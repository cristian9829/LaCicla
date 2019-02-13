webpackJsonp([11],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgregarFormaPagoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_models_Tarjeta__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_userservice_userservice__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_angular_forms__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AgregarFormaPagoPage = /** @class */ (function () {
    function AgregarFormaPagoPage(navCtrl, navParams, tarjeta, user_service, toastCtrl, storage, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tarjeta = tarjeta;
        this.user_service = user_service;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.formBuilder = formBuilder;
        this.todo = this.formBuilder.group({
            txtNumeroTarjeta: ['', __WEBPACK_IMPORTED_MODULE_5__node_modules_angular_forms__["f" /* Validators */].required],
            txtFechaVencimiento: ['', __WEBPACK_IMPORTED_MODULE_5__node_modules_angular_forms__["f" /* Validators */].required],
            txtCodigo: ['', __WEBPACK_IMPORTED_MODULE_5__node_modules_angular_forms__["f" /* Validators */].required]
        });
    }
    AgregarFormaPagoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AgregarFormaPagoPage');
    };
    AgregarFormaPagoPage.prototype.guardar = function () {
        var _this = this;
        this.tarjeta.codigo = this.todo.value.txtCodigo;
        this.tarjeta.fecha = this.todo.value.txtFechaVencimiento;
        this.tarjeta.numero = this.todo.value.txtNumeroTarjeta;
        console.log(this.tarjeta);
        this.storage.get('id_user').then(function (val) {
            _this.tarjeta.id_usuario = val;
            _this.user_service.createTarjeta(_this.tarjeta).subscribe(function (data) {
                _this.presentToast('Tarjeta Registrada!');
            }, function (err) {
                if (err.error instanceof Error) {
                    _this.presentToast('Error: ' + err.error.message);
                    console.log('Un error ha ocurrido', err.error.message);
                }
                else {
                    _this.presentToast('Error: ' + err.status);
                    console.log("Backend ha regresado un error " + err.status + ", body fue " + err.error);
                }
            });
        });
    };
    AgregarFormaPagoPage.prototype.presentToast = function (mensaje) {
        var toast = this.toastCtrl.create({
            message: mensaje,
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    AgregarFormaPagoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-agregar-forma-pago',template:/*ion-inline-start:"/home/vaico/Escritorio/Prototipos/12. La Cicla/34. La Cicla/2. Código Fuente/FrontEnd/lacicla/src/pages/agregar-forma-pago/agregar-forma-pago.html"*/'<!--\n  Generated template for the AgregarFormaPagoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Agrega tu Tarjeta</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="todo" (ngSubmit)="guardar()">\n    <ion-item>\n      <ion-label fixed>Numero Tarjeta</ion-label>\n      <ion-input type="text" formControlName="txtNumeroTarjeta" value=""></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>MM/AA</ion-label>\n      <ion-input type="text" formControlName="txtFechaVencimiento" value=""></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>CVV</ion-label>\n      <ion-input type="text" formControlName="txtCodigo" value=""></ion-input>\n    </ion-item>\n\n    <button ion-button type="submit" [disabled]="!todo.valid" color="primary" full>Guardar</button>\n  </form>\n</ion-content>'/*ion-inline-end:"/home/vaico/Escritorio/Prototipos/12. La Cicla/34. La Cicla/2. Código Fuente/FrontEnd/lacicla/src/pages/agregar-forma-pago/agregar-forma-pago.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__app_models_Tarjeta__["a" /* Tarjeta */],
            __WEBPACK_IMPORTED_MODULE_3__providers_userservice_userservice__["a" /* UserserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__node_modules_angular_forms__["a" /* FormBuilder */]])
    ], AgregarFormaPagoPage);
    return AgregarFormaPagoPage;
}());

//# sourceMappingURL=agregar-forma-pago.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cuenta1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cuenta2_cuenta2__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_models_Usuario__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the Cuenta1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Cuenta1Page = /** @class */ (function () {
    function Cuenta1Page(navCtrl, navParams, user, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = user;
        this.toastCtrl = toastCtrl;
    }
    Cuenta1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Cuenta1Page');
    };
    Cuenta1Page.prototype.registrar2 = function () {
        if (this.txtPassword.length < 8) {
            this.presentToast('La contraseña debe tener minimo 8 caracteres');
        }
        else {
            console.log(this.txtUsuario);
            this.user.idusuario = this.txtUsuario;
            this.user.password = this.txtPassword;
            this.user.email = this.txtEmail;
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cuenta2_cuenta2__["a" /* Cuenta2Page */], {
                data: this.user
            });
        }
    };
    Cuenta1Page.prototype.presentToast = function (mensaje) {
        var toast = this.toastCtrl.create({
            message: mensaje,
            duration: 4000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    Cuenta1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cuenta1',template:/*ion-inline-start:"/home/vaico/Escritorio/Prototipos/12. La Cicla/34. La Cicla/2. Código Fuente/FrontEnd/lacicla/src/pages/cuenta/crear/cuenta1/cuenta1.html"*/'<!--\n  Generated template for the Cuenta1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Crear Cuenta</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <p>\n    Registrate\n  </p>\n  <p>\n    <ion-item>\n      <ion-label fixed>Usuario</ion-label>\n      <ion-input type="text" [(ngModel)]="txtUsuario" value=""></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label fixed>Email</ion-label>\n        <ion-input type="text" [(ngModel)]="txtEmail" value=""></ion-input>\n      </ion-item>\n    <ion-item>\n      <ion-label fixed>Contraseña</ion-label>\n      <ion-input type="password" [(ngModel)]="txtPassword" value=""></ion-input>\n    </ion-item>\n    \n      <button ion-button color="primary" (click)="registrar2();" full>Siguiente</button>\n    \n  </p>\n</ion-content>'/*ion-inline-end:"/home/vaico/Escritorio/Prototipos/12. La Cicla/34. La Cicla/2. Código Fuente/FrontEnd/lacicla/src/pages/cuenta/crear/cuenta1/cuenta1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__app_models_Usuario__["a" /* Usuario */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], Cuenta1Page);
    return Cuenta1Page;
}());

//# sourceMappingURL=cuenta1.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cuenta2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cuenta3_cuenta3__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_models_Usuario__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the Cuenta2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Cuenta2Page = /** @class */ (function () {
    function Cuenta2Page(navCtrl, navParams, user) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = user;
        this.user = navParams.get('data');
    }
    Cuenta2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Cuenta2Page');
    };
    Cuenta2Page.prototype.registrar3 = function () {
        this.user.nombre = this.txtNombre;
        this.user.apellido = this.txtApellido;
        this.user.documento = this.txtDocumento;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cuenta3_cuenta3__["a" /* Cuenta3Page */], {
            data: this.user
        });
    };
    Cuenta2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cuenta2',template:/*ion-inline-start:"/home/vaico/Escritorio/Prototipos/12. La Cicla/34. La Cicla/2. Código Fuente/FrontEnd/lacicla/src/pages/cuenta/crear/cuenta2/cuenta2.html"*/'<!--\n  Generated template for the Cuenta2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Registrate</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <p>\n    Registrate\n  </p>\n  <p>\n    <ion-item>\n      <ion-label fixed>Nombre</ion-label>\n      <ion-input type="text" [(ngModel)]="txtNombre" value=""></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Apellidos</ion-label>\n      <ion-input type="text" [(ngModel)]="txtApellido" value=""></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Documento Identidad</ion-label>\n      <ion-input type="text" [(ngModel)]="txtDocumento" value=""></ion-input>\n    </ion-item>\n    <button ion-button color="primary" (click)="registrar3();" full>Siguiente</button>\n\n  </p>\n</ion-content>'/*ion-inline-end:"/home/vaico/Escritorio/Prototipos/12. La Cicla/34. La Cicla/2. Código Fuente/FrontEnd/lacicla/src/pages/cuenta/crear/cuenta2/cuenta2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__app_models_Usuario__["a" /* Usuario */]])
    ], Cuenta2Page);
    return Cuenta2Page;
}());

//# sourceMappingURL=cuenta2.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cuenta3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_models_Usuario__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_userservice_userservice__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__iniciosesion_iniciosesion__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the Cuenta3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Cuenta3Page = /** @class */ (function () {
    function Cuenta3Page(navCtrl, navParams, user, user_service, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = user;
        this.user_service = user_service;
        this.toastCtrl = toastCtrl;
        this.user = navParams.get('data');
    }
    Cuenta3Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Cuenta3Page');
    };
    Cuenta3Page.prototype.crearUsuario = function () {
        var _this = this;
        this.user.celular = this.txtCelular;
        this.user.direccion = this.txtDireccion;
        this.user.password_confirmation = this.user.password;
        console.log(this.user);
        this.user_service.create(this.user).subscribe(function (data) {
            _this.presentToast('Usuario Registrado!');
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__iniciosesion_iniciosesion__["a" /* IniciosesionPage */]);
        }, function (err) {
            if (err.error instanceof Error) {
                _this.presentToast('Error: ' + err.error.message);
                console.log('Un error ha ocurrido', err.error.message);
            }
            else {
                _this.presentToast('Error: ' + err.status);
                console.log("Backend ha regresado un error " + err.status + ", body fue " + err.error);
            }
        });
        ;
    };
    Cuenta3Page.prototype.presentToast = function (mensaje) {
        var toast = this.toastCtrl.create({
            message: mensaje,
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    Cuenta3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cuenta3',template:/*ion-inline-start:"/home/vaico/Escritorio/Prototipos/12. La Cicla/34. La Cicla/2. Código Fuente/FrontEnd/lacicla/src/pages/cuenta/crear/cuenta3/cuenta3.html"*/'<!--\n  Generated template for the Cuenta3Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Registrate</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <p>\n        Registrate\n      </p>\n      <p>\n        <ion-item>\n          <ion-label fixed>Celular</ion-label>\n          <ion-input type="text" [(ngModel)]="txtCelular" value=""></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label fixed>Direccion</ion-label>\n          <ion-input type="text" [(ngModel)]="txtDireccion" value=""></ion-input>\n        </ion-item>\n        \n          <button ion-button color="primary" (click)="crearUsuario();" full>Listo!</button>\n        \n      </p>\n</ion-content>\n'/*ion-inline-end:"/home/vaico/Escritorio/Prototipos/12. La Cicla/34. La Cicla/2. Código Fuente/FrontEnd/lacicla/src/pages/cuenta/crear/cuenta3/cuenta3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__app_models_Usuario__["a" /* Usuario */],
            __WEBPACK_IMPORTED_MODULE_3__providers_userservice_userservice__["a" /* UserserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], Cuenta3Page);
    return Cuenta3Page;
}());

//# sourceMappingURL=cuenta3.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DescuentosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_userservice_userservice__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DescuentosPage = /** @class */ (function () {
    function DescuentosPage(navCtrl, navParams, formBuilder, user_service, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.user_service = user_service;
        this.toastCtrl = toastCtrl;
        this.consultado = false;
        this.todo = this.formBuilder.group({
            txtNumeroCupon: ['', __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__["f" /* Validators */].required],
        });
    }
    DescuentosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DescuentosPage');
    };
    DescuentosPage.prototype.obtenerDescuentos = function () {
        var _this = this;
        this.user_service.obtenerDescuentos(this.todo.value.txtNumeroCupon).subscribe(function (data) {
            console.log(data);
            _this.consultado = true;
            if (data.message != "No existe") {
                _this.presentToast("Se ha validado tu ticket de Descuento!");
                _this.descuento = data.data[0];
            }
            else {
                _this.presentToast(data.message);
            }
        }, function (error) {
            console.error(error);
        });
    };
    DescuentosPage.prototype.presentToast = function (mensaje) {
        var toast = this.toastCtrl.create({
            message: mensaje,
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    DescuentosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-descuentos',template:/*ion-inline-start:"/home/vaico/Escritorio/Prototipos/12. La Cicla/34. La Cicla/2. Código Fuente/FrontEnd/lacicla/src/pages/descuentos/descuentos.html"*/'<!--\n  Generated template for the DescuentosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Descuentos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="todo" (ngSubmit)="obtenerDescuentos()">\n    <ion-item>\n      <ion-label fixed>Ingresa tu Codigo</ion-label>\n      <ion-input type="text" formControlName="txtNumeroCupon" value=""></ion-input>\n    </ion-item>\n    <button ion-button type="submit" [disabled]="!todo.valid" color="primary" full>Guardar</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/vaico/Escritorio/Prototipos/12. La Cicla/34. La Cicla/2. Código Fuente/FrontEnd/lacicla/src/pages/descuentos/descuentos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_userservice_userservice__["a" /* UserserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], DescuentosPage);
    return DescuentosPage;
}());

//# sourceMappingURL=descuentos.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormapagoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agregar_forma_pago_agregar_forma_pago__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_userservice_userservice__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_models_Tarjeta__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the FormapagoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FormapagoPage = /** @class */ (function () {
    function FormapagoPage(navCtrl, navParams, user_service, tarjetas, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user_service = user_service;
        this.tarjetas = tarjetas;
        this.storage = storage;
        this.consultado = false;
    }
    FormapagoPage.prototype.ionViewDidLoad = function () {
        this.obtenerTarjetas();
    };
    FormapagoPage.prototype.ionViewWillEnter = function () {
        this.obtenerTarjetas();
    };
    FormapagoPage.prototype.obtenerTarjetas = function () {
        var _this = this;
        this.storage.get('id_user').then(function (val) {
            _this.user_service.obtenerTarjetaPorId(val).subscribe(function (data) {
                _this.consultado = true;
                _this.list_tarjetas = data.data;
            }, function (error) {
                console.error(error);
            });
        });
    };
    FormapagoPage.prototype.agregarPago = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__agregar_forma_pago_agregar_forma_pago__["a" /* AgregarFormaPagoPage */]);
    };
    FormapagoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-formapago',template:/*ion-inline-start:"/home/vaico/Escritorio/Prototipos/12. La Cicla/34. La Cicla/2. Código Fuente/FrontEnd/lacicla/src/pages/formapago/formapago.html"*/'<!--\n  Generated template for the FormapagoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Forma de Pago</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      Tus Tarjetas\n    </ion-card-header>\n   <ion-spinner name="circles" *ngIf="consultado == false"></ion-spinner>\n    <ion-list>\n      <button *ngFor="let tarjeta of list_tarjetas" ion-item >\n        <ion-icon name="card" item-start></ion-icon>\n        {{tarjeta.numero}}\n      </button>\n    </ion-list>\n  </ion-card>\n  <button ion-button color="primary" (click)="agregarPago();" full>Agrega Metodo Pago</button>\n</ion-content>'/*ion-inline-end:"/home/vaico/Escritorio/Prototipos/12. La Cicla/34. La Cicla/2. Código Fuente/FrontEnd/lacicla/src/pages/formapago/formapago.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_userservice_userservice__["a" /* UserserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__app_models_Tarjeta__["a" /* Tarjeta */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], FormapagoPage);
    return FormapagoPage;
}());

//# sourceMappingURL=formapago.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecorridosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resumenrecorridos_resumenrecorridos__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_userservice_userservice__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_models_Recorridos__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RecorridosPage = /** @class */ (function () {
    function RecorridosPage(navCtrl, navParams, service, recorrido, toastCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.recorrido = recorrido;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
    }
    RecorridosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecorridosPage');
    };
    RecorridosPage.prototype.resumen = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__resumenrecorridos_resumenrecorridos__["a" /* ResumenrecorridosPage */]);
    };
    RecorridosPage.prototype.simular = function () {
        var _this = this;
        console.log('Simulando');
        this.storage.get('id_user').then(function (val) {
            _this.recorrido.id_tarjeta = 1;
            _this.recorrido.id_usuario = val;
            _this.recorrido.idbicicleta = '1';
            _this.recorrido.kilometrosrecorridos = 25;
            _this.recorrido.puntofinal = 'Calle 45';
            _this.recorrido.puntoinicial = 'Calle 170';
            _this.recorrido.tarifa = "5500";
            console.log(_this.recorrido);
            _this.service.simularRecorridos(_this.recorrido).subscribe(function (data) {
                _this.presentToast('Recorrido Registrado!');
            }, function (err) {
                if (err.error instanceof Error) {
                    _this.presentToast('Error: ' + err.error.message);
                    console.log('Un error ha ocurrido', err.error.message);
                }
                else {
                    _this.presentToast('Error: ' + err.status);
                    console.log("Backend ha regresado un error " + err.status + ", body fue " + err.error);
                }
            });
            ;
        });
    };
    RecorridosPage.prototype.presentToast = function (mensaje) {
        var toast = this.toastCtrl.create({
            message: mensaje,
            duration: 4000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    RecorridosPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    RecorridosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recorridos',template:/*ion-inline-start:"/home/vaico/Escritorio/Prototipos/12. La Cicla/34. La Cicla/2. Código Fuente/FrontEnd/lacicla/src/pages/recorridos/recorridos.html"*/'<ion-header>\n\n  <ion-navbar>\n      <a ng-click="goBack()" class="button back-button buttons  button-clear header-item nav-back-btn">\n          <i class="ion-android-arrow-back" id="customArrow"></i>\n      </a>\n      <ion-title>Recorridos TEST</ion-title>  \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      Explora tus Recorridos\n    </ion-card-header>\n  \n    <ion-list>\n      <button ion-item (click)="resumen();">\n        <ion-icon name="cart" item-start></ion-icon>\n        Ver Recorridos\n      </button>\n  \n      <button ion-item (click)="simular();">\n        <ion-icon name="medical"  item-start></ion-icon>\n        Simular Recorrido\n      </button>\n      </ion-list>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/vaico/Escritorio/Prototipos/12. La Cicla/34. La Cicla/2. Código Fuente/FrontEnd/lacicla/src/pages/recorridos/recorridos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_userservice_userservice__["a" /* UserserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__app_models_Recorridos__["a" /* Recorrido */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], RecorridosPage);
    return RecorridosPage;
}());

//# sourceMappingURL=recorridos.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumenrecorridosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_userservice_userservice__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_models_Recorridos__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResumenrecorridosPage = /** @class */ (function () {
    function ResumenrecorridosPage(navCtrl, navParams, service, recorridos_, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.recorridos_ = recorridos_;
        this.storage = storage;
        this.consultado = false;
        // this.recorridos = [
        //   { distancia: '15 Km', tiempo: '15:25', bicicleta: 'Model A' },
        //   { distancia: '10 Km', tiempo: '8:25', bicicleta: 'Model B' },
        //   { distancia: '20 Km', tiempo: '45:25', bicicleta: 'Model C' }
        // ]
    }
    ResumenrecorridosPage.prototype.ionViewDidLoad = function () {
        this.obtenerRecorridos();
    };
    ResumenrecorridosPage.prototype.obtenerRecorridos = function () {
        var _this = this;
        this.storage.get('id_user').then(function (val) {
            _this.service.obtenerRecorridoPorId(val).subscribe(function (data) {
                console.log(data);
                _this.consultado = true;
                _this.recorridos = data.data;
            }, function (error) {
                console.error(error);
            });
        });
    };
    ResumenrecorridosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-resumenrecorridos',template:/*ion-inline-start:"/home/vaico/Escritorio/Prototipos/12. La Cicla/34. La Cicla/2. Código Fuente/FrontEnd/lacicla/src/pages/resumenrecorridos/resumenrecorridos.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Resumen Recorridos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card *ngFor="let p of recorridos">\n    <ion-card-header>\n      Bicicleta Model A\n    </ion-card-header>\n    <ion-card-content>\n      Origen: {{p.puntoinicial}} Destino: {{p.puntofinal}}\n      Tarifa: {{p.tarifa}} Kms: {{p.kilometrosrecorridos}}\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/vaico/Escritorio/Prototipos/12. La Cicla/34. La Cicla/2. Código Fuente/FrontEnd/lacicla/src/pages/resumenrecorridos/resumenrecorridos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_userservice_userservice__["a" /* UserserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__app_models_Recorridos__["a" /* Recorrido */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], ResumenrecorridosPage);
    return ResumenrecorridosPage;
}());

//# sourceMappingURL=resumenrecorridos.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuscripcionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SuscripcionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SuscripcionPage = /** @class */ (function () {
    function SuscripcionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SuscripcionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SuscripcionPage');
    };
    SuscripcionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-suscripcion',template:/*ion-inline-start:"/home/vaico/Escritorio/Prototipos/12. La Cicla/34. La Cicla/2. Código Fuente/FrontEnd/lacicla/src/pages/suscripcion/suscripcion.html"*/'<!--\n  Generated template for the SuscripcionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>suscripcion</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/vaico/Escritorio/Prototipos/12. La Cicla/34. La Cicla/2. Código Fuente/FrontEnd/lacicla/src/pages/suscripcion/suscripcion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SuscripcionPage);
    return SuscripcionPage;
}());

//# sourceMappingURL=suscripcion.js.map

/***/ }),

/***/ 128:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 128;

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/agregar-forma-pago/agregar-forma-pago.module": [
		298,
		10
	],
	"../pages/cuenta/crear/cuenta1/cuenta1.module": [
		299,
		9
	],
	"../pages/cuenta/crear/cuenta2/cuenta2.module": [
		300,
		8
	],
	"../pages/cuenta/crear/cuenta3/cuenta3.module": [
		301,
		7
	],
	"../pages/cuenta/iniciosesion/iniciosesion.module": [
		302,
		6
	],
	"../pages/descuentos/descuentos.module": [
		303,
		5
	],
	"../pages/formapago/formapago.module": [
		304,
		4
	],
	"../pages/login/login.module": [
		305,
		3
	],
	"../pages/recorridos/recorridos.module": [
		306,
		2
	],
	"../pages/resumenrecorridos/resumenrecorridos.module": [
		307,
		1
	],
	"../pages/suscripcion/suscripcion.module": [
		308,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 170;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Auth; });
var Auth = /** @class */ (function () {
    function Auth() {
    }
    return Auth;
}());

//# sourceMappingURL=Auth.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Authent; });
var Authent = /** @class */ (function () {
    function Authent() {
    }
    return Authent;
}());

//# sourceMappingURL=authent.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mapa_mapa__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, storage) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.splash = true;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setTimeout(function () {
            _this.splash = false;
            _this.storage.get('token').then(function (val) {
                if (val != null && val != '') {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__mapa_mapa__["a" /* MapaPage */]);
                }
                else {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
                }
            });
        }, 4000);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/vaico/Escritorio/Prototipos/12. La Cicla/34. La Cicla/2. Código Fuente/FrontEnd/lacicla/src/pages/home/home.html"*/'<div id="custom-overlay" [style.display]="splash ? \'flex\': \'none\'">\n  <div class="flb">\n    <div class="Aligner-item Aligner-item--top"></div>\n    <img src="assets/imgs/Logo-la-cicla-transparente.png">\n    <div class="Aligner-item Aligner-item--bottom"></div>\n  </div>\n</div>\n\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle style="width: 100%">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/vaico/Escritorio/Prototipos/12. La Cicla/34. La Cicla/2. Código Fuente/FrontEnd/lacicla/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(240);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_cuenta_crear_cuenta1_cuenta1__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_cuenta_crear_cuenta2_cuenta2__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_cuenta_crear_cuenta3_cuenta3__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_cuenta_iniciosesion_iniciosesion__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_mapa_mapa__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_recorridos_recorridos__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_resumenrecorridos_resumenrecorridos__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_formapago_formapago__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_suscripcion_suscripcion__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_descuentos_descuentos__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__models_Usuario__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_userservice_userservice__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__node_modules_angular_common_http__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__models_Auth__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__models_authent__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_agregar_forma_pago_agregar_forma_pago__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__models_Tarjeta__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__models_Descuentos__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__models_Recorridos__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_cuenta_crear_cuenta1_cuenta1__["a" /* Cuenta1Page */],
                __WEBPACK_IMPORTED_MODULE_10__pages_cuenta_crear_cuenta2_cuenta2__["a" /* Cuenta2Page */],
                __WEBPACK_IMPORTED_MODULE_11__pages_cuenta_crear_cuenta3_cuenta3__["a" /* Cuenta3Page */],
                __WEBPACK_IMPORTED_MODULE_12__pages_cuenta_iniciosesion_iniciosesion__["a" /* IniciosesionPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_mapa_mapa__["a" /* MapaPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_recorridos_recorridos__["a" /* RecorridosPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_resumenrecorridos_resumenrecorridos__["a" /* ResumenrecorridosPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_formapago_formapago__["a" /* FormapagoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_suscripcion_suscripcion__["a" /* SuscripcionPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_descuentos_descuentos__["a" /* DescuentosPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_agregar_forma_pago_agregar_forma_pago__["a" /* AgregarFormaPagoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/agregar-forma-pago/agregar-forma-pago.module#AgregarFormaPagoPageModule', name: 'AgregarFormaPagoPage', segment: 'agregar-forma-pago', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cuenta/crear/cuenta1/cuenta1.module#Cuenta1PageModule', name: 'Cuenta1Page', segment: 'cuenta1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cuenta/crear/cuenta2/cuenta2.module#Cuenta2PageModule', name: 'Cuenta2Page', segment: 'cuenta2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cuenta/crear/cuenta3/cuenta3.module#Cuenta3PageModule', name: 'Cuenta3Page', segment: 'cuenta3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cuenta/iniciosesion/iniciosesion.module#IniciosesionPageModule', name: 'IniciosesionPage', segment: 'iniciosesion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/descuentos/descuentos.module#DescuentosPageModule', name: 'DescuentosPage', segment: 'descuentos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/formapago/formapago.module#FormapagoPageModule', name: 'FormapagoPage', segment: 'formapago', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recorridos/recorridos.module#RecorridosPageModule', name: 'RecorridosPage', segment: 'recorridos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/resumenrecorridos/resumenrecorridos.module#ResumenrecorridosPageModule', name: 'ResumenrecorridosPage', segment: 'resumenrecorridos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/suscripcion/suscripcion.module#SuscripcionPageModule', name: 'SuscripcionPage', segment: 'suscripcion', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_23__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22__node_modules_angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_cuenta_crear_cuenta1_cuenta1__["a" /* Cuenta1Page */],
                __WEBPACK_IMPORTED_MODULE_10__pages_cuenta_crear_cuenta2_cuenta2__["a" /* Cuenta2Page */],
                __WEBPACK_IMPORTED_MODULE_11__pages_cuenta_crear_cuenta3_cuenta3__["a" /* Cuenta3Page */],
                __WEBPACK_IMPORTED_MODULE_12__pages_cuenta_iniciosesion_iniciosesion__["a" /* IniciosesionPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_mapa_mapa__["a" /* MapaPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_recorridos_recorridos__["a" /* RecorridosPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_resumenrecorridos_resumenrecorridos__["a" /* ResumenrecorridosPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_formapago_formapago__["a" /* FormapagoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_suscripcion_suscripcion__["a" /* SuscripcionPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_descuentos_descuentos__["a" /* DescuentosPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_agregar_forma_pago_agregar_forma_pago__["a" /* AgregarFormaPagoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_20__models_Usuario__["a" /* Usuario */],
                __WEBPACK_IMPORTED_MODULE_22__node_modules_angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_21__providers_userservice_userservice__["a" /* UserserviceProvider */],
                Storage,
                __WEBPACK_IMPORTED_MODULE_24__models_Auth__["a" /* Auth */],
                __WEBPACK_IMPORTED_MODULE_25__models_authent__["a" /* Authent */],
                __WEBPACK_IMPORTED_MODULE_27__models_Tarjeta__["a" /* Tarjeta */],
                __WEBPACK_IMPORTED_MODULE_28__models_Descuentos__["a" /* Descuento */],
                __WEBPACK_IMPORTED_MODULE_29__models_Recorridos__["a" /* Recorrido */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_21__providers_userservice_userservice__["a" /* UserserviceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserserviceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserserviceProvider = /** @class */ (function () {
    function UserserviceProvider(httpClient) {
        this.httpClient = httpClient;
        // this.defaultUrl = 'http://localhost:3000';
        this.defaultUrl = 'https://lacicla.herokuapp.com';
    }
    UserserviceProvider.prototype.create = function (user) {
        var url = this.defaultUrl + "/usuarios";
        console.log(url);
        return this.httpClient.post(url, user);
    };
    UserserviceProvider.prototype.validateUser = function (auth) {
        var url = this.defaultUrl + "/usuario_token";
        console.log(url);
        return this.httpClient.post(url, auth);
    };
    UserserviceProvider.prototype.createTarjeta = function (tarjeta) {
        console.log(tarjeta);
        var url = this.defaultUrl + "/tarjetas";
        return this.httpClient.post(url, tarjeta);
    };
    UserserviceProvider.prototype.obtenerTarjetaPorId = function (id) {
        console.log(id);
        var url = this.defaultUrl + "/tarjetas/getbyid/" + id;
        console.log(url);
        return this.httpClient.get(url);
    };
    UserserviceProvider.prototype.obtenerDescuentos = function (codigo) {
        console.log(codigo);
        var url = this.defaultUrl + "/descuentos/getByCodigo/" + codigo;
        console.log(url);
        return this.httpClient.get(url);
    };
    UserserviceProvider.prototype.obtenerRecorridoPorId = function (id) {
        console.log(id);
        var url = this.defaultUrl + "/recorridos/getbyid/" + id;
        console.log(url);
        return this.httpClient.get(url);
    };
    UserserviceProvider.prototype.simularRecorridos = function (recorrido) {
        var url = this.defaultUrl + "/recorridos";
        console.log(url);
        return this.httpClient.post(url, recorrido);
    };
    UserserviceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], UserserviceProvider);
    return UserserviceProvider;
}());

//# sourceMappingURL=userservice.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_recorridos_recorridos__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_formapago_formapago__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_suscripcion_suscripcion__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_descuentos_descuentos__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, storage) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.storage = storage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Recorridos', component: __WEBPACK_IMPORTED_MODULE_5__pages_recorridos_recorridos__["a" /* RecorridosPage */], icon: 'bicycle' },
            { title: 'Forma de Pago', component: __WEBPACK_IMPORTED_MODULE_6__pages_formapago_formapago__["a" /* FormapagoPage */], icon: 'card' },
            { title: 'Suscripcion', component: __WEBPACK_IMPORTED_MODULE_7__pages_suscripcion_suscripcion__["a" /* SuscripcionPage */], icon: 'paper' },
            { title: 'Descuentos', component: __WEBPACK_IMPORTED_MODULE_8__pages_descuentos_descuentos__["a" /* DescuentosPage */], icon: 'remove-circle' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.logout = function () {
        this.storage.remove('token');
        this.nav.push(__WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */]);
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.push(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/vaico/Escritorio/Prototipos/12. La Cicla/34. La Cicla/2. Código Fuente/FrontEnd/lacicla/src/app/app.html"*/'<ion-menu [content]="content" persistent="true">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n          <ion-icon [name]="p.icon" item-start></ion-icon>\n        {{p.title}}\n      </button>\n      <button menuClose ion-item (click)="logout()">\n          <ion-icon name="log-out" item-start></ion-icon>\n        Logout\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/vaico/Escritorio/Prototipos/12. La Cicla/34. La Cicla/2. Código Fuente/FrontEnd/lacicla/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/home/vaico/Escritorio/Prototipos/12. La Cicla/34. La Cicla/2. Código Fuente/FrontEnd/lacicla/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/vaico/Escritorio/Prototipos/12. La Cicla/34. La Cicla/2. Código Fuente/FrontEnd/lacicla/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Descuento; });
var Descuento = /** @class */ (function () {
    function Descuento() {
    }
    return Descuento;
}());

//# sourceMappingURL=Descuentos.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Usuario; });
var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    return Usuario;
}());

//# sourceMappingURL=Usuario.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IniciosesionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapa_mapa__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_models_Auth__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_userservice_userservice__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_models_authent__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__node_modules_angular_forms__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the IniciosesionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IniciosesionPage = /** @class */ (function () {
    // txtEmail: string;
    // txtPassword: string;
    function IniciosesionPage(navCtrl, navParams, auth, authent, user_service, toastCtrl, storage, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.authent = authent;
        this.user_service = user_service;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.formBuilder = formBuilder;
        this.todo = this.formBuilder.group({
            txtEmail: ['', __WEBPACK_IMPORTED_MODULE_7__node_modules_angular_forms__["f" /* Validators */].required],
            txtPassword: ['', __WEBPACK_IMPORTED_MODULE_7__node_modules_angular_forms__["f" /* Validators */].required],
        });
    }
    IniciosesionPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('token').then(function (val) {
            console.log(val);
            if (val != null) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__mapa_mapa__["a" /* MapaPage */]);
            }
        });
    };
    IniciosesionPage.prototype.logForm = function () {
        var _this = this;
        this.auth.email = this.todo.value.txtEmail;
        this.auth.password = this.todo.value.txtPassword;
        this.authent.auth = this.auth;
        console.log(this.authent);
        this.user_service.validateUser(this.authent).subscribe(function (data) {
            console.log(data);
            if (data != undefined) {
                _this.storage.set('token', data.data.token);
                _this.storage.set('id_user', data.data.payload.sub);
                console.log(data.data.token);
                console.log(data.data.payload.sub);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__mapa_mapa__["a" /* MapaPage */]);
            }
            else {
                _this.presentToast('Usuario o Password Invalida');
            }
        }, function (err) {
            if (err.error instanceof Error) {
                _this.presentToast('Usuario o Password Invalida');
                console.log('Un error ha ocurrido', err.error.message);
            }
            else {
                console.log("Backend ha regresado un error " + err.status + ", body fue " + err.error);
                _this.presentToast('Usuario o Password Invalida');
            }
        });
    };
    IniciosesionPage.prototype.presentToast = function (mensaje) {
        var toast = this.toastCtrl.create({
            message: mensaje,
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    IniciosesionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-iniciosesion',template:/*ion-inline-start:"/home/vaico/Escritorio/Prototipos/12. La Cicla/34. La Cicla/2. Código Fuente/FrontEnd/lacicla/src/pages/cuenta/iniciosesion/iniciosesion.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Inicio Sesion</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <p>\n    Inicia Sesión\n  </p>\n\n  <form [formGroup]="todo" (ngSubmit)="logForm()">\n    <ion-item>\n      <ion-label fixed>Email</ion-label>\n      <ion-input type="text" required formControlName="txtEmail" value="" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Contraseña</ion-label>\n      <ion-input type="password" required formControlName="txtPassword" value="" ></ion-input>\n    </ion-item>\n    <button ion-button type="submit" [disabled]="!todo.valid" color="primary" full>Siguiente</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/vaico/Escritorio/Prototipos/12. La Cicla/34. La Cicla/2. Código Fuente/FrontEnd/lacicla/src/pages/cuenta/iniciosesion/iniciosesion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__app_models_Auth__["a" /* Auth */],
            __WEBPACK_IMPORTED_MODULE_5__app_models_authent__["a" /* Authent */],
            __WEBPACK_IMPORTED_MODULE_4__providers_userservice_userservice__["a" /* UserserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_7__node_modules_angular_forms__["a" /* FormBuilder */]])
    ], IniciosesionPage);
    return IniciosesionPage;
}());

//# sourceMappingURL=iniciosesion.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cuenta_crear_cuenta1_cuenta1__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cuenta_iniciosesion_iniciosesion__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.registrar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cuenta_crear_cuenta1_cuenta1__["a" /* Cuenta1Page */]);
    };
    LoginPage.prototype.iniciarSesion = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cuenta_iniciosesion_iniciosesion__["a" /* IniciosesionPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/vaico/Escritorio/Prototipos/12. La Cicla/34. La Cicla/2. Código Fuente/FrontEnd/lacicla/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <p></p>\n    <p>\n        <img src="assets/imgs/Propuesta-1.png">\n    </p>\n\n      <p>\n        <button ion-button color="secondary" full (click)="registrar();">Registrate Gratis</button>\n      </p>\n    \n      <p>\n        <button ion-button color="primary" full>Inicia Con Facebook</button>\n      </p>\n      <p>\n          ¿Ya eres usuario?\n        </p>\n      <p>\n        <button ion-button color="light" (click)="iniciarSesion();" large full>Iniciar Sesion</button>\n      </p>\n</ion-content>'/*ion-inline-end:"/home/vaico/Escritorio/Prototipos/12. La Cicla/34. La Cicla/2. Código Fuente/FrontEnd/lacicla/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tarjeta; });
var Tarjeta = /** @class */ (function () {
    function Tarjeta() {
    }
    return Tarjeta;
}());

//# sourceMappingURL=Tarjeta.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// @IonicPage()
var MapaPage = /** @class */ (function () {
    // rootPage: any = MapaPage;
    function MapaPage(navCtrl, geolocation, menuCtrl, toastCtrl, alertCtrl, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.menuCtrl = menuCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.men = __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Menu */];
        this.rootPage = MapaPage_1;
        this.pages = [
            { title: 'Home' },
            { title: 'List' },
            { title: 'Anotaciones' }
        ];
        platform.registerBackButtonAction(function () {
            var activeView = navCtrl.getActive().name;
            if (activeView == "MapaPage") {
                _this.presentConfirm();
            }
            else {
                _this.navCtrl.pop();
            }
        });
    }
    MapaPage_1 = MapaPage;
    MapaPage.prototype.presentConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Salir',
            message: 'Quieres cerrar LaCicla?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Salir',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        alert.present();
    };
    MapaPage.prototype.presentToast = function (mensaje) {
        var toast = this.toastCtrl.create({
            message: mensaje,
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    MapaPage.prototype.ionViewDidLoad = function () {
        this.getPosition();
    };
    MapaPage.prototype.getPosition = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (response) {
            _this.loadMap(response);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    MapaPage.prototype.loadMap = function (position) {
        var _this = this;
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        console.log(latitude, longitude);
        // create a new map by passing HTMLElement
        var mapEle = document.getElementById('map');
        var myLatLng = { lat: latitude, lng: longitude };
        // create map
        this.map = new google.maps.Map(mapEle, {
            center: myLatLng,
            zoom: 12
        });
        google.maps.event.addListenerOnce(this.map, 'idle', function () {
            var marker = new google.maps.Marker({
                position: myLatLng,
                map: _this.map,
                title: 'Hello World!'
            });
            mapEle.classList.add('show-map');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MapaPage.prototype, "nav", void 0);
    MapaPage = MapaPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mapa',template:/*ion-inline-start:"/home/vaico/Escritorio/Prototipos/12. La Cicla/34. La Cicla/2. Código Fuente/FrontEnd/lacicla/src/pages/mapa/mapa.html"*/'<ion-header>\n    <ion-navbar hideBackButton>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n      <ion-title>La Cicla</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content>\n  <div id="map"></div>\n</ion-content>\n'/*ion-inline-end:"/home/vaico/Escritorio/Prototipos/12. La Cicla/34. La Cicla/2. Código Fuente/FrontEnd/lacicla/src/pages/mapa/mapa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
    ], MapaPage);
    return MapaPage;
    var MapaPage_1;
}());

//# sourceMappingURL=mapa.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Recorrido; });
var Recorrido = /** @class */ (function () {
    function Recorrido() {
    }
    return Recorrido;
}());

//# sourceMappingURL=Recorridos.js.map

/***/ })

},[219]);
//# sourceMappingURL=main.js.map