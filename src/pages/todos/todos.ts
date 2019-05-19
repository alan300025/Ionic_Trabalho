import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventosTodos } from '../../models/eventos-todos';
import { Observable } from 'rxjs';
import { EventosTodosProvider } from '../../providers/eventos-todos/eventos-todos';
/**
 * Generated class for the TodosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-todos',
  templateUrl: 'todos.html',
})
export class TodosPage {
  imgFoto: string;
  eventos: Observable<EventosTodos[]>;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private eventosTodosProvider:EventosTodosProvider) {
  }
  getFoto(image: string){
    return this.eventosTodosProvider.getFoto(image);  
}

  ionViewDidLoad() {
    this.eventos = this.eventosTodosProvider.pegarEventos(true);
    
  }
}
