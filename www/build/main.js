webpackJsonp([6],{

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Welcome; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Welcome = /** @class */ (function () {
    function Welcome(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Welcome.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* Login */]);
    };
    Welcome.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    Welcome = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"C:\GIT_ALAN\Ionic_Trabalho-top\src\pages\welcome\welcome.html"*/'<ion-content padding id="welcome">\n  <!-- style="width:100%;height:30%;text-align:100% center;align-content: center;align-self: center;" src="assets/imgs/logo.png" !-->\n  <ion-grid>\n      <ion-row>\n        <ion-col center text-center>  \n           <img src="assets/imgs/logo1.png" class="logo"/>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    \n      <ion-grid>\n          <ion-row>\n            <ion-col center text-center>  \n      \n              </ion-col>\n            </ion-row>\n          </ion-grid>\n\n  <ion-grid >\n    <ion-row>\n      <ion-col center text-center>\n        <button ion-button large color="" (click)="login()">\n            <ion-icon name="ios-contact"> Login </ion-icon> </button>\n            <button ion-button large  color="danger" (click)="signup()" >\n              <ion-icon name="ios-contact-outline"> Crie uma Conta </ion-icon> </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col center text-center>\n        <!-- button enbaixo -->\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"C:\GIT_ALAN\Ionic_Trabalho-top\src\pages\welcome\welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], Welcome);
    return Welcome;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventoListarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_eventos_eventos__ = __webpack_require__(163);
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
 * Generated class for the EventoListarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventoListarPage = /** @class */ (function () {
    function EventoListarPage(navCtrl, navParams, eventosProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eventosProvider = eventosProvider;
    }
    EventoListarPage.prototype.getFoto = function (image) {
        return this.eventosProvider.getFoto(image);
    };
    EventoListarPage.prototype.ionViewDidLoad = function () {
        this.eventos = this.eventosProvider.pegarEventos(true);
    };
    EventoListarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-evento-listar',template:/*ion-inline-start:"C:\GIT_ALAN\Ionic_Trabalho-top\src\pages\evento-listar\evento-listar.html"*/'<!--\n  Generated template for the EventoListarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Seus Eventos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card *ngFor="let evento of eventos | async">\n  \n      <img [src]="evento.foto"/>\n  \n    <ion-card-content>\n      <ion-card-title>\n        <ion-icon name="md-arrow-dropright" item-start ></ion-icon><a>Nome Evento:</a> {{ evento.nomeEvento }}\n        <ion-icon name="md-arrow-dropright" item-start ></ion-icon><a>Resposavel:</a> {{ evento.nomeCriador }}\n        <ion-icon name="md-arrow-dropright" item-start ></ion-icon><a>Localização:</a> La {{ evento.latitude }} / Lon {{ evento.longitude }}\n        </ion-card-title>\n      <p>\n        <ion-icon name="md-calendar" item-start ></ion-icon><a>DATA ENVIO:</a> {{ evento.dataEnvio }} <ion-icon name="md-calendar" item-start ></ion-icon><a>DATA DO EVENTO:</a> {{ evento.data }}\n      </p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n'/*ion-inline-end:"C:\GIT_ALAN\Ionic_Trabalho-top\src\pages\evento-listar\evento-listar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_eventos_eventos__["a" /* EventosProvider */]])
    ], EventoListarPage);
    return EventoListarPage;
}());

//# sourceMappingURL=evento-listar.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Importações necessárias



var EventosProvider = /** @class */ (function () {
    // Parametros que vamos injetar no construtor
    function EventosProvider(afs, auth) {
        var _this = this;
        this.afs = afs;
        this.auth = auth;
        // Definição do caminho onde será salvo os dados
        // dos usuários
        this.caminho = '';
        // Verificando ser o usuário está logado para criarmos o caminho
        this.auth.user.subscribe(function (auth) {
            // Verificacao de auth 
            if (auth != null) {
                _this.caminho = '/eventos-' + auth.email;
                _this.eventosColllection = afs.collection(_this.caminho, function (ref) {
                    return ref;
                });
            }
            else {
                _this.caminho = '';
            }
        });
        //this.productsRef = this.afs.collection<Product>('productos');
    }
    EventosProvider.prototype.pegarEventos = function (app) {
        return this.afs
            .collection(this.caminho, function (ref) {
            return ref.where('app', '==', app);
        })
            .snapshotChanges()
            .map(function (actions) {
            return actions.map(function (a) {
                //Get document data
                var data = a.payload.doc.data();
                //Get document id
                var id = a.payload.doc.id;
                //Use spread operator to add the id to the document data
                return __assign({ id: id }, data);
            });
        });
    };
    // Método usado para adicionar uma tarefa
    EventosProvider.prototype.adicionar = function (evento) {
        var _this = this;
        this.auth.user.subscribe(function (auth) {
            /*
            if(evento.tipoEvento == "Privado" || evento.tipoEvento == ""){
                  evento.idUser="";
            }else evento.idUser = auth.uid;  */
            _this.eventosColllection.add(evento);
        });
    };
    EventosProvider.prototype.getFoto = function (image) {
        var imgUrl;
        try {
            __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.storage().ref().child(image).getDownloadURL().then(function (url) {
                console.log("log1: " + url);
                imgUrl = '' + url + '';
                return imgUrl;
            });
        }
        catch (e) {
            console.log(e);
            return 'error';
        }
    };
    // Método usado para atualizar uma tarefa
    EventosProvider.prototype.atualizar = function (id, task) {
        this.eventosColllection.doc(id).update(task);
    };
    // Método usado para excluir uma tarefa
    EventosProvider.prototype.excluir = function (id) {
        this.eventosColllection.doc(id).delete();
    };
    EventosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["AngularFirestore"], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
    ], EventosProvider);
    return EventosProvider;
}());

//# sourceMappingURL=eventos.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome_welcome__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__todos_todos__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__evento_listar_evento_listar__ = __webpack_require__(123);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Serviço de autenticação



var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, auth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_6__evento_listar_evento_listar__["a" /* EventoListarPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_5__todos_todos__["a" /* TodosPage */];
        // Usado para direcionar o usuário que não estiver logado para a página de login
        this.auth.user.subscribe(function (auth) {
            if (auth == null) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__welcome_welcome__["a" /* Welcome */]);
            }
        });
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\GIT_ALAN\Ionic_Trabalho-top\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Criar Evento" tabIcon="ios-clipboard"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Seus Eventos" tabIcon="ios-list-box"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Todos os Eventos" tabIcon="ios-people"></ion-tab> \n \n</ion-tabs>\n'/*ion-inline-end:"C:\GIT_ALAN\Ionic_Trabalho-top\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_eventos_eventos__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_eventos_todos_eventos_todos__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__welcome_welcome__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__evento_listar_evento_listar__ = __webpack_require__(123);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Importação da página tabs que o usuário será direcionado
// ao finalizar a edição de uma tarefa
//geo







var HomePage = /** @class */ (function () {
    // Adicionando o serviço de tarefa no construtor
    function HomePage(navCtrl, navParams, eventosProvider, eventosTodosProvider, alertCtrl, platform, geolocation, camera, auth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eventosProvider = eventosProvider;
        this.eventosTodosProvider = eventosTodosProvider;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.geolocation = geolocation;
        this.camera = camera;
        this.auth = auth;
        // Definição do atributo tarefa que será usado para o cadastro
        this.eventos = {};
        this.eventosTodos = {};
        this.alertCtrl = alertCtrl;
        platform.ready().then(function () {
            _this.iniciarMapa();
        });
    }
    HomePage.prototype.sair = function () {
        var _this = this;
        this.auth.logout().then(function (value) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__welcome_welcome__["a" /* Welcome */]);
        });
    };
    HomePage.prototype.iniciarMapa = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude); // pegando localização atual
            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                disabledZoomDoubleClick: true,
                fullscreenControl: true
            };
            _this.map = new google.maps.Map(document.getElementById('map'), mapOptions); //adicionando mapa com as opçoes
            var marker = new google.maps.Marker({
                map: _this.map,
                animation: google.maps.Animation.DROP,
                position: latLng,
                draggable: true,
            });
            google.maps.event.addListener(marker, 'dragend', function () {
                _this.latitudeFinal = marker.position.lat();
                _this.longitudeFinal = marker.position.lng();
                console.log(_this.latitudeFinal + '' + '' + _this.longitudeFinal);
            });
        }, function (error) {
            console.log(error);
        });
    };
    HomePage.prototype.capture = function () {
        var _this = this;
        var cameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            allowEdit: true,
            targetWidth: 200,
            targetHeight: 200
        };
        this.camera.getPicture(cameraOptions).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    HomePage.prototype.showSuccesfulUploadAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Evento criado com Sucesso',
            subTitle: 'Venha seu eventos criados',
            buttons: ['FECHAR']
        });
        alert.present();
        // clear the previous photo data in the variable
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__evento_listar_evento_listar__["a" /* EventoListarPage */]);
        this.captureDataUrl = "";
    };
    // Método que será usado para adicionar uma tarefa
    HomePage.prototype.adicionar = function (eventos, eventosTodos) {
        var _this = this;
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.storage().ref();
        var filename = Math.floor(Date.now() / 1000);
        eventos.id = filename;
        // Create a reference to 'images/todays-date.jpg'
        var imageRef = storageRef.child("imagesEventos/" + eventos.id + ".jpg");
        //emviar imagem para o firabase
        imageRef.putString(this.captureDataUrl, __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.storage.StringFormat.DATA_URL).then(function (snapshot) {
            var url = "imagesEventos/" + eventos.id + ".jpg";
            //cria a url da imagem para download
            __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.storage().ref().child(url).getDownloadURL().then(function (url) {
                console.log("log1: " + url);
                //eventos.id=id;
                var data = new Date();
                var dia = data.getDate();
                var diaReal;
                if (dia < 10) {
                    diaReal = "0" + dia;
                }
                else
                    diaReal = dia;
                var mes = data.getMonth() + 1;
                var mesReal;
                if (mes < 10) {
                    mesReal = "0" + mes;
                }
                else
                    mesReal = mes;
                var ano = data.getFullYear();
                eventos.dataEnvio = diaReal + "/" + mesReal + "/" + ano + "";
                eventos.latitude = _this.latitudeFinal;
                eventos.longitude = _this.longitudeFinal;
                eventos.foto = url;
                eventos.app = true;
                //todos
                //
                eventosTodos.tipo = eventos.tipo;
                eventosTodos.nomeEvento = eventos.nomeEvento;
                eventosTodos.nomeCriador = eventos.nomeCriador;
                eventosTodos.data = eventos.data;
                eventosTodos.rua = eventos.descricao;
                eventosTodos.rua = eventos.rua;
                eventosTodos.bairro = eventos.bairro;
                eventosTodos.numeroCasa = eventos.numeroCasa;
                eventosTodos.telefone = eventos.telefone;
                ///
                eventosTodos.dataEnvio = diaReal + "/" + mesReal + "/" + ano + "";
                eventosTodos.latitude = _this.latitudeFinal;
                eventosTodos.longitude = _this.longitudeFinal;
                eventosTodos.app = true;
                eventosTodos.foto = url;
                _this.eventosProvider.adicionar(eventos);
                _this.eventosTodosProvider.adicionar(eventosTodos);
                _this.showSuccesfulUploadAlert();
                console.log(eventos.dataEnvio);
            });
        });
    };
    HomePage.prototype.getFoto = function (image, eventos, id) {
        var imgUrl;
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdicionarTarefaPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _a || Object)
    ], HomePage.prototype, "mapElement", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({ selector: 'page-home',template:/*ion-inline-start:"C:\GIT_ALAN\Ionic_Trabalho-top\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    \n    <ion-title>Criar Evento</ion-title>\n    \n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="sair()">\n        <ion-icon name="ios-log-out-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n  <div #map2 id="map"></div>\n\n  <ion-card>\n\n  <ion-card-content>\n    \n      <ion-item>\n          <ion-label floating>Tipo eventos</ion-label>\n          <ion-select okText="Ok" cancelText="Cancelar" [(ngModel)]="eventos.tipo">\n               <ion-option value="Privada"><strong>Privado</strong></ion-option>\n              <ion-option value="Publica"><strong>Publica</strong></ion-option>\n            </ion-select>\n        </ion-item>\n\n        <ion-item>\n            <ion-label floating>Nome do Evento </ion-label>\n            <ion-textarea type="text" [(ngModel)]="eventos.nomeEvento" maxlength="400"></ion-textarea>\n        </ion-item> \n\n        <ion-item>\n          <ion-label floating>Quem ou qual empresa Resposavel? </ion-label>\n          <ion-textarea type="text" [(ngModel)]="eventos.nomeCriador" maxlength="400"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n          <ion-label>Dia do evento</ion-label>\n          <ion-datetime displayFormat="DD/MM/YYYY"  [(ngModel)]="eventos.data" min="2019" max="2050" placeholder="Selecionar Data"></ion-datetime>\n        </ion-item> \n\n      <ion-item>\n          <ion-label floating>Descreva o Evento </ion-label>\n          <ion-textarea type="text" [(ngModel)]="eventos.descricao" maxlength="400"></ion-textarea>\n      </ion-item> \n\n      <ion-item>\n          <ion-label floating>Rua </ion-label>\n          <ion-input type="text" [(ngModel)]="eventos.rua" maxlength="100"></ion-input>\n     </ion-item>\n\n        <ion-item>\n            <ion-label floating>Bairro </ion-label>\n            <ion-input type="text" [(ngModel)]="eventos.bairro" maxlength="100"></ion-input>\n          </ion-item>\n\n          <ion-item>\n              <ion-label floating>Número da casa/local</ion-label>\n              <ion-input type="tel" [(ngModel)]="eventos.numeroCasa" maxlength="100"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label floating>Telefone para Informacoes</ion-label>\n            <ion-input type="tel" [(ngModel)]="eventos.telefone" maxlength="14"></ion-input>\n      </ion-item>\n\n  \n\n\n\n\n    <ion-item>\n        <div style="display:flex; flex-direction:column;justify-content:center">\n\n\n            <button ion-button round color="" (click)="capture()"><ion-icon name="md-camera">\n\n            </ion-icon> Tire a foto!</button>\n        \n            <img [src]="captureDataUrl"  *ngIf="captureDataUrl"/>\n            \n          </div>\n    </ion-item>   \n             \n    <button ion-button color="secondary" block (click)="adicionar(eventos,eventosTodos)">\n        Adicionar\n    </button>\n  \n  </ion-card-content>\n\n</ion-card>\n  \n</ion-content>'/*ion-inline-end:"C:\GIT_ALAN\Ionic_Trabalho-top\src\pages\home\home.html"*/ }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__providers_eventos_eventos__["a" /* EventosProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_eventos_eventos__["a" /* EventosProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__providers_eventos_todos_eventos_todos__["a" /* EventosTodosProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_eventos_todos_eventos_todos__["a" /* EventosTodosProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _k || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(183);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

// Nesse import adicionamos o AlertController que será usado para apresentar a mensagem do nosso aplicativo

// Importação do nosso serviço de autenticação

// Importação da página que o usuário será redirecionado após o login

var Login = /** @class */ (function () {
    // Aqui no contrutor vamos adicionar o AuthProvider e o AlertController
    function Login(navCtrl, navParams, auth, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        // Definindo o nosso atributo usuário do tipo User
        this.user = {};
    }
    // Método para exibir as nossas mensagens de erro.
    Login.prototype.alert = function (title, message) {
        var al = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['Fechar']
        });
        al.present();
    };
    // Método usado para login do usuário
    // Recebe como parametro um tipo user e tenta fazer o login
    Login.prototype.login = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(user.email == "" || user.password == "")) return [3 /*break*/, 1];
                        this.alert('Erro', 'É necessário informar o email e senha');
                        return [3 /*break*/, 4];
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.auth.login(user)];
                    case 2:
                        result = _a.sent();
                        if (result) {
                            // Se ocorrer tudo bem redireciona para a página tabs
                            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        this.alert('Erro ao logar', e_1.message);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Login.prototype.ionViewDidLoad = function () {
        // Toda vez que um usuário acessar a página de login ele será deslogado
        this.auth.logout();
    };
    Login = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\GIT_ALAN\Ionic_Trabalho-top\src\pages\login\login.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Logar</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n<ion-card>\n\n  <ion-card-header class="login">\n      <ion-grid >\n          <ion-row>\n            <ion-col center text-center>\n              <ion-icon style="zoom:8;" name="ios-contact"></ion-icon>\n            </ion-col>\n          </ion-row>\n      </ion-grid>\n  </ion-card-header>\n\n  <ion-card-content>\n    <ion-item>\n      <ion-label floating>E-mail</ion-label>\n      <ion-input type="email" [(ngModel)]="user.email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Senha</ion-label>\n      <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n    </ion-item>\n\n    <button ion-button block (click)="login(user)">Login</button>\n  \n  </ion-card-content>\n\n</ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\GIT_ALAN\Ionic_Trabalho-top\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Login);
    return Login;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_eventos_todos_eventos_todos__ = __webpack_require__(308);
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
 * Generated class for the TodosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TodosPage = /** @class */ (function () {
    function TodosPage(navCtrl, navParams, eventosTodosProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eventosTodosProvider = eventosTodosProvider;
    }
    TodosPage.prototype.getFoto = function (image) {
        return this.eventosTodosProvider.getFoto(image);
    };
    TodosPage.prototype.ionViewDidLoad = function () {
        this.eventos = this.eventosTodosProvider.pegarEventos(true);
    };
    TodosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-todos',template:/*ion-inline-start:"C:\GIT_ALAN\Ionic_Trabalho-top\src\pages\todos\todos.html"*/'<!--\n  Generated template for the TodosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Geral</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n\n  <ion-card *ngFor="let evento of eventos | async">\n  \n      <img [src]="evento.foto"/>\n  \n    <ion-card-content>\n      <ion-card-title>\n        <ion-icon name="md-arrow-dropright" item-start ></ion-icon><a>Nome Evento:</a> {{ evento.nomeEvento }}\n        <ion-icon name="md-arrow-dropright" item-start ></ion-icon><a>Resposavel:</a> {{ evento.nomeCriador }}\n        <ion-icon name="md-arrow-dropright" item-start ></ion-icon><a>Localização:</a> La {{ evento.latitude }} / Lon {{ evento.longitude }}\n        </ion-card-title>\n      <p>\n        <ion-icon name="md-calendar" item-start ></ion-icon><a>DATA ENVIO:</a> {{ evento.dataEnvio }} <ion-icon name="md-calendar" item-start ></ion-icon><a>DATA DO EVENTO:</a> {{ evento.data }}\n      </p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"C:\GIT_ALAN\Ionic_Trabalho-top\src\pages\todos\todos.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_eventos_todos_eventos_todos__["a" /* EventosTodosProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_eventos_todos_eventos_todos__["a" /* EventosTodosProvider */]) === "function" && _c || Object])
    ], TodosPage);
    return TodosPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=todos.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_app_users_app_users__ = __webpack_require__(309);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

// Nesse import adicionamos o AlertController que será usado para apresentar a mensagem do nosso aplicativo

// Importação do nosso serviço de autenticação

// Importação da página que o usuário será redirecionado após o login



var SignupPage = /** @class */ (function () {
    // Aqui no contrutor vamos adicionar o AuthProvider e o AlertController
    function SignupPage(navCtrl, navParams, auth, alertCtrl, formBuilder, appUser) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.appUser = appUser;
        // Definindo o nosso atributo usuário do tipo User
        this.user = {};
    }
    // Método para exibir as nossas mensagens de erro.
    SignupPage.prototype.alert = function (title, message) {
        var al = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['Fechar']
        });
        al.present();
    };
    SignupPage.prototype.signup = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(user.email == "" || user.password == "")) return [3 /*break*/, 1];
                        this.alert('Erro', 'É necessário informar o email e senha');
                        return [3 /*break*/, 4];
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.auth.register(user)];
                    case 2:
                        result = _a.sent();
                        if (result) {
                            // Se ocorrer tudo bem redireciona para a página tabs 
                            user.password = " ";
                            user.app = true;
                            this.appUser.adicionar(user);
                            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        this.alert('Erro ao cadastrar', e_1.message);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SignupPage.prototype.ionViewDidLoad = function () {
        // Toda vez que um usuário acessar a página de login ele será deslogado
        this.auth.logout();
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\GIT_ALAN\Ionic_Trabalho-top\src\pages\signup\signup.html"*/'<ion-header>\n    <ion-navbar color="primary">\n      <ion-title>Nova Conta</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n  \n  <ion-card>\n  \n    <ion-card-header class="login">\n        <ion-grid >\n            <ion-row>\n              <ion-col center text-center>\n                <ion-icon style="zoom:8;" name="ios-contact-outline"></ion-icon>\n              </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-card-header>\n  \n    <ion-card-content>\n\n      <ion-item>\n        <ion-label floating>Nome Completo</ion-label>\n        <ion-input type="text" [(ngModel)]="user.nome"></ion-input>\n      </ion-item>\n\n\n\n              <ion-item>\n                <ion-label floating>Telefone</ion-label>\n                <ion-input type="tel" [(ngModel)]="user.telefone"></ion-input>\n              </ion-item>\n\n      <ion-item>\n        <ion-label floating>E-mail</ion-label>\n        <ion-input type="email" [(ngModel)]="user.email" ></ion-input>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label floating>Senha</ion-label>\n        <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n      </ion-item>\n  \n      <button ion-button block color="secondary" (click)="signup(user)">Cadastro</button>\n    \n    </ion-card-content>\n  \n  </ion-card>\n  \n  </ion-content>'/*ion-inline-end:"C:\GIT_ALAN\Ionic_Trabalho-top\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__providers_app_users_app_users__["a" /* AppUsersProvider */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 242:
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
webpackEmptyAsyncContext.id = 242;

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/evento-listar/evento-listar.module": [
		616,
		5
	],
	"../pages/evento/evento.module": [
		617,
		0
	],
	"../pages/home/home.module": [
		618,
		4
	],
	"../pages/login/login.module": [
		619,
		3
	],
	"../pages/signup/signup.module": [
		621,
		2
	],
	"../pages/todos/todos.module": [
		620,
		1
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
webpackAsyncContext.id = 284;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventosTodosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Importações necessárias



var EventosTodosProvider = /** @class */ (function () {
    // Parametros que vamos injetar no construtor
    function EventosTodosProvider(afs, auth) {
        var _this = this;
        this.afs = afs;
        this.auth = auth;
        this.caminho = '';
        // Verificando ser o usuário está logado para criarmos o caminho
        this.auth.user.subscribe(function (auth) {
            // Verificacao de auth 
            if (auth != null) {
                _this.caminho = '/eventosTodos';
                _this.eventosColllection = afs.collection(_this.caminho, function (ref) {
                    return ref;
                });
            }
            else {
                _this.caminho = '';
            }
        });
        //this.productsRef = this.afs.collection<Product>('productos');
    }
    EventosTodosProvider.prototype.pegarEventos = function (app) {
        return this.afs
            .collection(this.caminho, function (ref) {
            return ref.where('app', '==', app);
        })
            .snapshotChanges()
            .map(function (actions) {
            return actions.map(function (a) {
                //Get document data
                var data = a.payload.doc.data();
                //Get document id
                var id = a.payload.doc.id;
                //Use spread operator to add the id to the document data
                return __assign({ id: id }, data);
            });
        });
    };
    // Método usado para adicionar uma tarefa
    EventosTodosProvider.prototype.adicionar = function (evento) {
        var _this = this;
        this.auth.user.subscribe(function (auth) {
            /*
            if(evento.tipoEvento == "Privado" || evento.tipoEvento == ""){
                  evento.idUser="";
            }else evento.idUser = auth.uid;  */
            evento.email = auth.email;
            _this.eventosColllection.add(evento);
        });
    };
    EventosTodosProvider.prototype.getFoto = function (image) {
        var imgUrl;
        try {
            __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.storage().ref().child(image).getDownloadURL().then(function (url) {
                console.log("log1: " + url);
                imgUrl = '' + url + '';
                return imgUrl;
            });
        }
        catch (e) {
            console.log(e);
            return 'error';
        }
    };
    // Método usado para atualizar uma tarefa
    EventosTodosProvider.prototype.atualizar = function (id, task) {
        this.eventosColllection.doc(id).update(task);
    };
    // Método usado para excluir uma tarefa
    EventosTodosProvider.prototype.excluir = function (id) {
        this.eventosColllection.doc(id).delete();
    };
    EventosTodosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["AngularFirestore"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["AngularFirestore"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _b || Object])
    ], EventosTodosProvider);
    return EventosTodosProvider;
    var _a, _b;
}());

//# sourceMappingURL=eventos-todos.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppUsersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Importações necessárias


var AppUsersProvider = /** @class */ (function () {
    // Parametros que vamos injetar no construtor
    function AppUsersProvider(afs, auth) {
        var _this = this;
        this.afs = afs;
        this.auth = auth;
        // Definição do caminho onde será salvo os dados
        // dos usuários
        this.caminho = '';
        // Verificando ser o usuário está logado para criarmos o caminho
        this.auth.user.subscribe(function (auth) {
            // Verifica se está logado e adiciona o caminho, usaremos o email
            // como caminho para ficar mais fácil identificar as tarefas de cada usuário
            if (auth != null) {
                _this.caminho = '/dados-' + auth.email;
                _this.usersColllection = afs.collection(_this.caminho, function (ref) {
                    return ref;
                });
            }
            else {
                _this.caminho = '';
            }
        });
        //this.productsRef = this.afs.collection<Product>('productos');
    }
    // Este método será retorna um lista de tarefas pode ser
    // as finalizadas ou as que ainda não foram finalizadas
    // para filtrar passamos o parametro finalizada
    AppUsersProvider.prototype.pegarUser = function (app) {
        return this.afs
            .collection(this.caminho, function (ref) {
            return ref.where('app', '==', app);
        })
            .snapshotChanges()
            .map(function (actions) {
            return actions.map(function (a) {
                //Get document data
                var data = a.payload.doc.data();
                //Get document id
                var id = a.payload.doc.id;
                //Use spread operator to add the id to the document data
                return __assign({ id: id }, data);
            });
        });
    };
    // Método usado para adicionar uma tarefa
    AppUsersProvider.prototype.adicionar = function (user) {
        this.usersColllection.add(user);
    };
    // Método usado para atualizar uma tarefa
    AppUsersProvider.prototype.atualizar = function (id, task) {
        this.usersColllection.doc(id).update(task);
    };
    // Método usado para excluir uma tarefa
    AppUsersProvider.prototype.excluir = function (id) {
        this.usersColllection.doc(id).delete();
    };
    AppUsersProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["AngularFirestore"], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
    ], AppUsersProvider);
    return AppUsersProvider;
}());

//# sourceMappingURL=app-users.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(472);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_firestore__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__config__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_home__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_auth_auth__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_app_users_app_users__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_eventos_eventos__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_evento_listar_evento_listar__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_todos_todos__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_eventos_todos_eventos_todos__ = __webpack_require__(308);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// login



//Autenticação



//Config do firebas, banco de dados

//geo

//Photo











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_evento_listar_evento_listar__["a" /* EventoListarPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_todos_todos__["a" /* TodosPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* Welcome */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/evento-listar/evento-listar.module#EventoListarPageModule', name: 'EventoListarPage', segment: 'evento-listar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/evento/evento.module#EventoPageModule', name: 'EventoPage', segment: 'evento', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#EventoPageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'Login', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/todos/todos.module#TodosPageModule', name: 'TodosPage', segment: 'todos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                    ]
                }),
                // Configurações do Firebase e autenticação do firebase
                __WEBPACK_IMPORTED_MODULE_8_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_11__config__["a" /* config */]),
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_firestore__["AngularFirestoreModule"],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_evento_listar_evento_listar__["a" /* EventoListarPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_todos_todos__["a" /* TodosPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* Welcome */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_18__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_19__providers_app_users_app_users__["a" /* AppUsersProvider */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_20__providers_eventos_eventos__["a" /* EventosProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_eventos_todos_eventos_todos__["a" /* EventosTodosProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// FIM
var AuthProvider = /** @class */ (function () {
    function AuthProvider(firebaseAuth) {
        this.firebaseAuth = firebaseAuth;
        this.user = firebaseAuth.authState;
    }
    // Metodo de cadastro
    AuthProvider.prototype.register = function (user) {
        return this.firebaseAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    };
    // Método de login
    AuthProvider.prototype.login = function (user) {
        return this.firebaseAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    };
    // Método de logout
    AuthProvider.prototype.logout = function () {
        return this.firebaseAuth.auth.signOut();
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(118);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* Welcome */]; // Replace tabsPage with Welcome
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\GIT_ALAN\Ionic_Trabalho-top\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\GIT_ALAN\Ionic_Trabalho-top\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
var config = {
    apiKey: "AIzaSyDaDbIcGZF6kn3W2e3tPMhGKfNNLID9wew",
    authDomain: "ionictrabalho-843fc.firebaseapp.com",
    databaseURL: "https://ionictrabalho-843fc.firebaseio.com",
    projectId: "ionictrabalho-843fc",
    storageBucket: "ionictrabalho-843fc.appspot.com",
    messagingSenderId: "267533749097"
};
//# sourceMappingURL=config.js.map

/***/ })

},[351]);
//# sourceMappingURL=main.js.map