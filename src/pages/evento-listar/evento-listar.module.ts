import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventoListarPage } from './evento-listar';

@NgModule({
  declarations: [
    EventoListarPage,
  ],
  imports: [
    IonicPageModule.forChild(EventoListarPage),
  ],
})
export class EventoListarPageModule {}
