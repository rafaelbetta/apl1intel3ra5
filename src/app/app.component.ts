import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { TroncosPage } from '../pages/troncos/troncos';
import { RamaisPage } from '../pages/ramais/ramais';
import { AccPage } from '../pages/acc/acc';
import { ProdutosPage } from '../pages/produtos/produtos';
import { ResultadosPage } from '../pages/resultados/resultados';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  pages: Array<{title: string, Component: any}>

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      {title: 'Home', Component: HomePage},
      {title: 'Troncos', Component: TroncosPage},
      {title: 'Ramais', Component: RamaisPage},
      {title: 'Acessórios', Component: AccPage},
      {title: 'Produtos', Component: ProdutosPage},
      {title: 'Resultados', Component: ResultadosPage}
    ]
  }
}

