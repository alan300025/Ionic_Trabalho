import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
// login
import { Welcome } from '../pages/welcome/welcome';
import { Login } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
//Autenticação
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

//Config do firebas, banco de dados
import { config } from '../config';

//geo
import { Geolocation } from '@ionic-native/geolocation'; 


//Photo
import { Camera } from '@ionic-native/camera';



import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SignaturePadModule } from 'angular2-signaturepad';
import { AuthProvider } from '../providers/auth/auth';

import { AppUsersProvider } from '../providers/app-users/app-users';
import { EventosProvider } from '../providers/eventos/eventos';
import { EventoListarPage } from '../pages/evento-listar/evento-listar';
import { TodosPage } from '../pages/todos/todos';
import { EventosTodosProvider } from '../providers/eventos-todos/eventos-todos';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EventoListarPage,
    TodosPage,
    Welcome,
    Login,
    SignupPage,
    TabsPage
  ],
  imports: [
    BrowserModule, HttpModule,
    IonicModule.forRoot(MyApp),
   
    // Configurações do Firebase e autenticação do firebase
    AngularFireModule.initializeApp(config),

    AngularFireAuthModule,

    AngularFirestoreModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EventoListarPage,
    TodosPage,
    Welcome,
    Login,
    SignupPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,//AuthServiceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,Geolocation,
    AppUsersProvider,Camera,
    EventosProvider,
    EventosTodosProvider
  ]
})
export class AppModule {}
