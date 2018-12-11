import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResultadosPage } from '../resultados/resultados'


@IonicPage()
@Component({
  selector: 'page-acc',
  templateUrl: 'acc.html',
})
export class AccPage {
  TroncoArray: Int16Array;
  RamalArray: Int16Array; 
  clienteId: any;
  AcGC: string = '';
  AcCV: string = '';
  AcMV: string = '';
  AcDISA: string = '';
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.TroncoArray = navParams.get('TroncoArray');
    this.RamalArray = navParams.get('RamalArray');  
    this.clienteId = navParams.get('clienteId');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccPage');
    console.log(this.clienteId)
  }

  openResultados() {
    var Ary = []
    
    if (this.AcGC == ""){
      Ary[0] = 0;
    } else {
      Ary[0] = parseInt(this.AcGC);
    }
    if (this.AcCV == ""){
      Ary[1] = 0;
    } else {
      Ary[1] = parseInt(this.AcCV);
    }
    if (this.AcMV == ""){
      Ary[2] = 0
    } else {
      Ary[2] = parseInt(this.AcMV);
    }
    if (this.AcDISA == ""){
      Ary[3] = 0;
    }  else {
      Ary[3] = parseInt(this.AcDISA);
    }

    this.navCtrl.push(ResultadosPage, {
      TroncoArray: this.TroncoArray,
      RamalArray: this.RamalArray,
      AccArray: Ary,
      clienteId: this.clienteId
    });
  }

}
