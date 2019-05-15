import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Platform } from 'ionic-angular';
import firebase from 'firebase';
// Importações necessárias

// Importação do modelo de tarefas
import { Eventos } from '../../models/eventos';

// Importação da página tabs que o usuário será direcionado
// ao finalizar a edição de uma tarefa


//geo
import { Geolocation } from '@ionic-native/geolocation';
declare var google: any;
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AuthProvider } from '../../providers/auth/auth';
import { EventosProvider } from '../../providers/eventos/eventos';
import { AppUsers } from '../../models/app-users';
import { Observable } from 'rxjs';
import { Welcome } from '../welcome/welcome';
import { EventoListarPage } from '../evento-listar/evento-listar';
@IonicPage()
@Component({ selector: 'page-home', templateUrl: 'home.html' })

export class HomePage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  longitudeFinal: any;
  latitudeFinal: any;

  captureDataUrl: string;
  siteUrl: string;
  appUsers: Observable<AppUsers[]>;
  // Definição do atributo tarefa que será usado para o cadastro
  public eventos = {} as Eventos;

  // Adicionando o serviço de tarefa no construtor
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private eventosProvider: EventosProvider,
    public alertCtrl: AlertController,
    public platform: Platform,
    private geolocation: Geolocation,
    private camera: Camera,
    private auth: AuthProvider) {
    this.alertCtrl = alertCtrl;
    platform.ready().then(() => {
      this.iniciarMapa();
    });
  }
  sair() {
    this.auth.logout().then(value => {
      this.navCtrl.setRoot(Welcome);
     });
  }
  iniciarMapa() {
    this.geolocation.getCurrentPosition().then((position) => {
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude); // pegando localização atual

      let mapOptions = { //opções do mapa
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disabledZoomDoubleClick: true,
        fullscreenControl: true
      }
      this.map = new google.maps.Map(document.getElementById('map'), mapOptions); //adicionando mapa com as opçoes

      let marker = new google.maps.Marker({ //Adicionando marcador
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: latLng,
        draggable: true,

      });

      google.maps.event.addListener(marker, 'dragend', () => {
        this.latitudeFinal = marker.position.lat();
        this.longitudeFinal = marker.position.lng();
        console.log(this.latitudeFinal + '' + '' + this.longitudeFinal)
      })

    }, (error) => {
      console.log(error);
    });
  }

  capture() {
    const cameraOptions: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      allowEdit: true,
      targetWidth: 200,
      targetHeight: 200
    };

    this.camera.getPicture(cameraOptions).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }

  showSuccesfulUploadAlert() {
    let alert = this.alertCtrl.create({
      title: 'Evento criado com Sucesso',
      subTitle: 'Venha seu eventos criados',
      buttons: ['FECHAR']
    });
    alert.present();

    // clear the previous photo data in the variable
    this.navCtrl.setRoot(EventoListarPage);
    this.captureDataUrl = "";
  }

  // Método que será usado para adicionar uma tarefa
  adicionar(eventos: Eventos) {
    let storageRef = firebase.storage().ref();

    const filename = Math.floor(Date.now() / 1000);
    eventos.id = filename;
    // Create a reference to 'images/todays-date.jpg'
    const imageRef = storageRef.child(`imagesEventos/${eventos.id}.jpg`);
    //emviar imagem para o firabase
    imageRef.putString(this.captureDataUrl, firebase.storage.StringFormat.DATA_URL).then((snapshot) => {

    
      var url = `imagesEventos/${eventos.id}.jpg`;

      //cria a url da imagem para download
      firebase.storage().ref().child(url).getDownloadURL().then(url => {
        console.log("log1: " + url);

        //eventos.id=id;
        var data = new Date();
        var dia = data.getDate();
        var diaReal;
        if (dia < 10) {
          diaReal = "0" + dia;
        } else diaReal = dia;
        var mes = data.getMonth() + 1;
        var mesReal;
        if (mes < 10) {
          mesReal = "0" + mes;
        } else mesReal = mes;
        var ano = data.getFullYear();

        eventos.dataEnvio = diaReal + "/" + mesReal + "/" + ano + "";

        eventos.latitude= this.latitudeFinal;
        eventos.longitude = this.longitudeFinal;

        eventos.foto = url;
        eventos.app = true;
        this.eventosProvider.adicionar(eventos);
        this.showSuccesfulUploadAlert();
        console.log(eventos.dataEnvio);
      });


    });


  }
  getFoto(image: string, eventos: Eventos, id: number) {
    let imgUrl: string;


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdicionarTarefaPage');
  }

}
