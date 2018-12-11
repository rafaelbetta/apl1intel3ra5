import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AccPage } from '../acc/acc'

@IonicPage()
@Component({
  selector: 'page-ramais',
  templateUrl: 'ramais.html',
})
export class RamaisPage {
  TroncoArray: Int16Array;
  clienteId: any;
  RaAn: string = '';
  RaDi: string = '';
  RaIP: string = '';
  RaSD: string = '';
  RaCD: string = '';
  RaVC: string = '';
  RaSP: string = '';
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.TroncoArray = navParams.get('TroncoArray');
    this.clienteId = navParams.get('clienteId')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RamaisPage');
    console.log(this.TroncoArray);
    console.log(this.clienteId);
  }

  openAcc() {
    var Rry = [];

    if (this.RaAn == ""){
      Rry[0] = 0;
    } else {
      Rry[0] = parseInt(this.RaAn);
    }
    if (this.RaDi == ""){
      Rry[1] = 0;
    } else {
      Rry[1] = parseInt(this.RaDi);
    }
    if (this.RaIP == ""){
      Rry[2] = 0
    } else {
      Rry[2] = parseInt(this.RaIP);
    }
    if (this.RaSD == ""){
      Rry[3] = 0;
    }  else {
      Rry[3] = parseInt(this.RaSD);
    }
    if (this.RaCD == ""){
      Rry[4] = 0;
    } else {
      Rry[4] = parseInt(this.RaCD);
    }
    if (this.RaVC == ""){
      Rry[5] = 0;
    } else {
      Rry[5] = parseInt(this.RaVC);
    }
    if (this.RaSP == ""){
      Rry[6] = 0
    } else {
      Rry[6] = parseInt(this.RaSP);
    }

    this.navCtrl.push(AccPage, {
      TroncoArray: this.TroncoArray,
      RamalArray: Rry,
      clienteId: this.clienteId
    });
  }

}
