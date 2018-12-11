import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RamaisPage } from '../ramais/ramais';

@IonicPage()
@Component({
  selector: 'page-troncos',
  templateUrl: 'troncos.html',
})
export class TroncosPage {
  TrAn: string  = '';
  TrDi: string  = '';
  TrIP: string  = '';
  TrGSM: string = '';
  
  clienteId: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.clienteId = navParams.get('clienteId');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TroncosPage');
    
    console.log(this.clienteId);
  }

  openRamais() { 
    var Try = [];

    if (this.TrAn == ""){
      Try[0] = 0;
    } else {
      Try[0] = parseInt(this.TrAn);
    }
    if (this.TrDi == ""){
      Try[1] = 0;
    } else {
      Try[1] = parseInt(this.TrDi);
    }
    if (this.TrIP == ""){
      Try[2] = 0
    } else {
      Try[2] = parseInt(this.TrIP);
    }
    if (this.TrGSM == ""){
      Try[3] = 0;
    }  else {
      Try[3] = parseInt(this.TrGSM);
    }
    //Os IFs são necessários, pois não tem como converter vazio '' direto para um número inteiro;
    var x = Try[0] + Try[1] + Try[2]+ Try[3];
    if (x >= 60) {
      alert("O número máximo de troncos permitidos é de 60, reveja o número. Atual: " + x);
    } else {
      this.navCtrl.push(RamaisPage, {
        TroncoArray: Try,
        clienteId: this.clienteId
      });
    }
  }

}
