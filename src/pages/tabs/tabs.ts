
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Welcome } from '../welcome/welcome';

import { HomePage } from '../home/home';
// Serviço de autenticação
import { AuthProvider } from '../../providers/auth/auth'
import { TodosPage } from '../todos/todos';
import { EventoListarPage } from '../evento-listar/evento-listar';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = EventoListarPage;
  tab3Root = TodosPage;

  constructor( public navCtrl: NavController, private auth: AuthProvider) {
        // Usado para direcionar o usuário que não estiver logado para a página de login
        this.auth.user.subscribe(
          (auth) => {
            if (auth == null) {
              this.navCtrl.setRoot(Welcome);
            }
          });

  }
}
