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
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ALTERAÇÃO 01 PASSO 6°
// Importações para funcionamento do Firebase e da Autenticação
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
// Configurações do FIREBASE
import { config } from '../config';
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> FIM DA ALTERAÇÃO 01
//geo
import { Geolocation } from '@ionic-native/geolocation'; 
//geo
//Login


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SignaturePadModule } from 'angular2-signaturepad';
import { AuthProvider } from '../providers/auth/auth';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    Welcome,
    Login,
    SignupPage,
    TabsPage
  ],
  imports: [
    BrowserModule, HttpModule,
    IonicModule.forRoot(MyApp),
    
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ALTERAÇÃO 03 PASSO 6°
    // Configurações do Firebase
    AngularFireModule.initializeApp(config),
    // Configuração do serviço de autenticação do firebase
    AngularFireAuthModule,
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> FIM DA ALTERAÇÃO 03
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    Welcome,
    Login,
    SignupPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,//AuthServiceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,Geolocation
  ]
})
export class AppModule {}
