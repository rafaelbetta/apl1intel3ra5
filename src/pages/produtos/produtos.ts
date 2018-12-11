import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
})
export class ProdutosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutosPage');
  }

  show(x){
    switch (x) {
      case 1:
        document.getElementById("card-centrais").style.display="flex";
        document.getElementById("card-placas").style.display="none";
        document.getElementById("card-acc").style.display="none";
        break;
      case 2:
        document.getElementById("card-centrais").style.display="none";
        document.getElementById("card-placas").style.display="flex";
        document.getElementById("card-acc").style.display="none";
        break;
      case 3:
        document.getElementById("card-centrais").style.display="none";
        document.getElementById("card-placas").style.display="none";
        document.getElementById("card-acc").style.display="flex";
        break;
      default:
        break;
    }
  }



}
