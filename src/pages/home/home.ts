import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TroncosPage } from '../troncos/troncos';
import { ProdutosPage } from '../produtos/produtos';
import { SavedPage } from '../saved/saved'
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, private storage: Storage) {
  }

  openTroncos() {
    var nome = prompt("Digite o nome do cliente"); //Nome do cliente para a simulação > entran o objeto
    var listaNomes = [];
    this.storage.get('lista').then((lista_salva) => {//Vai criar ou pegar a lista de nomes e vai atualizar
      if (lista_salva !== null) { //Adiciona nome
        lista_salva.push(nome)
        this.storage.set('lista',lista_salva);
      } else { //Cria a lista, caso vazia
        listaNomes = [nome];
        this.storage.set('lista',listaNomes);
      }
    });
  
    var clienteId;  
    this.storage.get('clientes').then((matriz) => { //Mesma coisa da lista, atualiza o array de objetos com a nova simulação que está sendo iniciada ou cria o array
      if (matriz !== null) {
        clienteId = Object.keys(matriz).length;
        matriz[Object.keys(matriz).length] = {
          id: Object.keys(matriz).length,
          Nfilial: 0,
          nome: nome
        };
        this.storage.set('clientes', matriz);
        this.navCtrl.push(TroncosPage, { clienteId: clienteId });
      } else {
        matriz = {}; // é necessário definir como objeto utilizado o {}
        clienteId = 0;
        matriz[0] = { // o [0] transforma o objeto em um array de objetos
          id: 0,
          Nfilial: 0,
          nome: nome
        };
        this.storage.set('clientes',matriz);
        this.navCtrl.push(TroncosPage, { clienteId: clienteId }); //O ID é o que vai ser utilizado para encontrar o objeto
      }
    });
  }

  openProdutos() {
    this.navCtrl.push(ProdutosPage)
  }

  openSaved() { //Abre a página de simulações
    this.navCtrl.push(SavedPage)
  }

  clear(){ //Apaga todos os dados dos clientes e simulações efetuadas
    this.storage.remove('lista');
    this.storage.remove('clientes');
  }

  load(){ //A função serve de verificação das simulações criadas e nomes de usuários já inseridos
    this.storage.get('lista').then((val) => {
      console.log(val)
    });
    this.storage.get('clientes').then((matriz) => {
      console.log(matriz);
      //console.log(matriz[0])

      if (matriz !== null ){
        console.log(Object.keys(matriz).length);
      }
      
    })
  }
}
