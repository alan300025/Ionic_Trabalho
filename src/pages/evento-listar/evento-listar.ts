import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Eventos } from '../../models/eventos';
import { Observable } from 'rxjs';
import { EventosProvider } from '../../providers/eventos/eventos';

/**
 * Generated class for the EventoListarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-evento-listar',
  templateUrl: 'evento-listar.html',
})
export class EventoListarPage {
  imgFoto: string;
  eventos: Observable<Eventos[]>;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private eventosProvider:EventosProvider) {
  }
  getFoto(image: string){
    return this.eventosProvider.getFoto(image);  
}

  ionViewDidLoad() {
    this.eventos = this.eventosProvider.pegarEventos(true);
    
  }
}
