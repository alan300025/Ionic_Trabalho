import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

// Importações necessárias
import { AuthProvider } from '../../providers/auth/auth'
import { Eventos} from '../../models/eventos'
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import firebase from 'firebase';
@Injectable()
export class EventosProvider {

  // Definição do caminho onde será salvo os dados
  // dos usuários
  private caminho: string = '';

  // Coleção de tarefas
  private eventosColllection: AngularFirestoreCollection<Eventos>;

  // Lista de tarefas
  tasks: Observable<Eventos[]>;

  // Parametros que vamos injetar no construtor
  constructor(private afs: AngularFirestore, private auth: AuthProvider) {
    // Verificando ser o usuário está logado para criarmos o caminho
    this.auth.user.subscribe(auth => {
      
      // Verificacao de auth 

      if(auth != null)
      {
        this.caminho = '/eventos-' + auth.email;
        this.eventosColllection = afs.collection<Eventos>(this.caminho, ref => {
          return ref;
        });

      } else {
        this.caminho = '';
      }
    });
    //this.productsRef = this.afs.collection<Product>('productos');


  }

  

  pegarEventos(app: boolean) {
    return this.afs
      .collection<Eventos>(this.caminho, ref => {
        return ref.where('app', '==', app);
      })
      .snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          //Get document data
          const data = a.payload.doc.data() as Eventos;
          //Get document id
          const id = a.payload.doc.id;
          //Use spread operator to add the id to the document data
          return { id,...data };
        })
      });
  } 

  // Método usado para adicionar uma tarefa
  adicionar(evento: Eventos) {
    this.auth.user.subscribe(auth => {

      /*
      if(evento.tipoEvento == "Privado" || evento.tipoEvento == ""){
            evento.idUser="";
      }else evento.idUser = auth.uid;  */    
        
        this.eventosColllection.add(evento);
   });


  }
  getFoto(image: string){
    let imgUrl: string;
    try{
      firebase.storage().ref().child(image).getDownloadURL().then(function(url){
        console.log("log1: " + url);
        imgUrl=''+url+'';
        return imgUrl;
      });
    }
    catch(e){
      console.log(e);
      return 'error';
    }   
}
  // Método usado para atualizar uma tarefa
  atualizar (id: string, task:Eventos) {
    this.eventosColllection.doc(id).update(task);
  }

  // Método usado para excluir uma tarefa
  excluir (id: string) {
    this.eventosColllection.doc(id).delete();
  }

}