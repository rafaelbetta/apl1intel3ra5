import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TroncosPage } from '../pages/troncos/troncos';
import { RamaisPage } from '../pages/ramais/ramais';
import { AccPage } from '../pages/acc/acc';
import { ProdutosPage } from '../pages/produtos/produtos';
import { ResultadosPage } from '../pages/resultados/resultados';
import { SavedPage } from '../pages/saved/saved'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TroncosPage,
    RamaisPage,
    AccPage,
    ProdutosPage,
    ResultadosPage,
    SavedPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TroncosPage,
    RamaisPage,
    AccPage,
    ProdutosPage,
    ResultadosPage,
    SavedPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
