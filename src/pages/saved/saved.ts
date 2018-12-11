import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage'

@IonicPage()
@Component({
  selector: 'page-saved',
  templateUrl: 'saved.html',
})
export class SavedPage {
  ContSalvos: number;


  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SavedPage');
    var html_lista;
    this.storage.get('lista').then((lista) => {
      for (let i = 0; i < lista.length; i++) {
        html_lista += '<ion-card> <ion-card-content> <h3> '+lista[i]+' </h3> <button ion-button full (click)="mostrar(X)"> Mostrar Resultado </button> </ion-card-content></ion-card><br>'
      }

      document.getElementById('nomes').innerHTML = html_lista;
    });
  }

  mostrar(X) {
    document.getElementById('nomes').style.display = 'none';
    document.getElementById('result').style.display = 'flex';
    document.getElementById('result').style.flexDirection = 'column';

    var html_resultado;

    this.storage.get('clientes').then((matriz) => {
      html_resultado = '<h2>'+matriz[X].nome+'</h2>';
      html_resultado += '<h3> Matriz </h3>';
      for (let i = 0; i < Object.keys(matriz[X].Matriz).length; i++) {
        if (i <= 3) {
          html_resultado += matriz[X].Matriz[i]+ " tronco<br>"          
        } else if (i <= 10) {
          html_resultado +=  matriz[X].Matriz[i]+ ' Ramais<br>'
        } else {
          html_resultado +=  matriz[X].Matriz[i]+ ' Acessórios<br>'
        }
      }
      document.getElementById('result').innerHTML = html_resultado;

    })



  }


}
