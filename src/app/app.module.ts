import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { ControlMessages } from '../components/control-messages/control-messages.component';

import { ValidationService } from '../services/validation.service';


@NgModule({
  declarations: [
    ControlMessages,    
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    ValidationService,
  ]
})
export class AppModule {}
