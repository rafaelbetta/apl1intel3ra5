import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TroncosPage } from '../troncos/troncos'

@IonicPage()
@Component({
  selector: 'page-resultados',
  templateUrl: 'resultados.html',
})
export class ResultadosPage {
  Try: Int16Array;
  Rry: Int16Array;
  Ary: Int16Array;
  clienteId: any;
  FullArray: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  this.Try = navParams.get('TroncoArray');
  this.Rry = navParams.get('RamalArray');
  this.Ary = navParams.get('AccArray');
  this.clienteId = navParams.get('clienteId')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultadosPage');
    console.log(this.Try);
    console.log(this.Rry);
    console.log(this.Ary);
    console.log(this.clienteId);
  }

  Resultar(){
    var TroncoArray = this.Try; //Analogico, digital, ip, gsm
    var RamalArray = this.Rry; //Analogico, digital, IP, Sem display, Com display, Video chamada e Softphone
    var AccArray = this.Ary; //Gravação de chamadas, correio de voz, mesa virtual e DISA

    // ----- RAMAIS -----
    //Slots de Ramais Ana
    var RA = Math.ceil(RamalArray[0]/16);
    //Slots de ramais dig
    var RD = Math.ceil(RamalArray[1]/12);

    // ====== TRONCOS ======
    //Slots de troncos analogicos
    var TA = Math.ceil(TroncoArray[0]/8);
    //Slots de troncos digitais 1E1 (30) e 2E1 (60)
    var TD1E1 = Math.ceil(TroncoArray[1]/30); //  
    var TD2E1 = Math.floor(TD1E1/2); //  
    var TD = TD1E1 - TD2E1; //
    //Slots de troncos IP
    var TI = Math.ceil(TroncoArray[2]/60);
    //Slots de troncos GSM
    var TG = Math.ceil((Math.ceil(TroncoArray[3]/4))/2); //Número de slots
    var EG = Math.floor((Math.ceil(TroncoArray[3]/4))/2); //Expansão
     
    //Calcula total de slots e escreve o resultado
    var slots = RA + RD + TA + TD + TI + TG;
    var Central;
    if (slots == 0){
      Central = "Cetral não atende esse requisito (0 slots) <br>";
    } else if (slots < 7){
      Central = "Central 2k <br>";
    } else if (slots < 11) {
      Central = "Central 3k <br>";
    } else {
      Central = "Nenhuma Central não atende esse requisito (" + slots + " slots [max = 10]) <br>";
    }
    document.getElementById("Central").innerHTML = Central; //Aqui bota o valor no <p id="central">
    
    //Escreve a quantidade de cada placas, sendo que a mista não foi considerada.
    var Placas = "<b>Placas requisitadas ("+slots+"):</b> <br>";
    if (RA > 0) { Placas += RA + "x Placa(s) para Ramal analógico<br>" }
    if (RD > 0) { Placas += RD + "x Placa(s) para Ramal digital<br>" }
    if (TA > 0) { Placas += TA + "x Placa(s) para Tronco analógico<br>" }
    if (TD1E1 > 0) { Placas += TD + "x Placa(s) para Tronco Digital (30)<br>" }
    if (TD2E1 > 0) { Placas += TD + "x Placa(s) para Tronco Digital (60)<br>" }
    if (TI > 0) { Placas += TI + "x Placa(s) para Tronco IP<br>" }
    if (TG > 0) { Placas += TG + "x Placa(s) para Tronco GSM, com "+EG+"x expansões<br>" }
    document.getElementById("Placas").innerHTML = Placas; //escreve no <p id='placas'>

    //Escreve as licenças necessárias para os acessórios
    var Acc = "<b>Licenças de acessórios requistados:</b> <br>"
    if (AccArray[0] > 0) { Acc += "Gravação de chamada <br>" }
    if (AccArray[1] > 0) { Acc += "Correio de voz <br>" }
    if (AccArray[2] > 0) { Acc += "Mesa virtual <br>" }
    if (AccArray[3] > 0) { Acc += "GISA<br>" }
    document.getElementById("Acc").innerHTML = Acc;// <p id="Acc">. O innerhtml modifica tudo o que ta dentro da tag e bota o que eu setar, no caso o texto
    document.getElementById("Title").style.display="flex";//Ativa o card do resultado
    
    //Aqui prepara o array para salvar no objeto
    var Array_select = [];
    Array_select[0] = TroncoArray[0];
    Array_select[1] = TroncoArray[1];
    Array_select[2] = TroncoArray[2];
    Array_select[3] = TroncoArray[3];
    Array_select[4] = RamalArray[0];
    Array_select[5] = RamalArray[1];
    Array_select[6] = RamalArray[2];
    Array_select[7] = RamalArray[3];
    Array_select[8] = RamalArray[4];
    Array_select[9] = RamalArray[5];
    Array_select[10] = RamalArray[6];
    Array_select[11] = AccArray[0];
    Array_select[12] = AccArray[1];
    Array_select[13] = AccArray[2];
    Array_select[14] = AccArray[3];
    
    var local; //A variável local serve para determinar se é matriz ou filial e o número da filial, para por no objeto
    var novoObjeto; // o "nome: valor" do objeto é criado antes e inserido de uma vez só
    this.storage.get('clientes').then((matriz) => {
      for (let i = 0; i < Object.keys(matriz).length; i++) {
        if (this.clienteId == matriz[i].id){
          if (matriz[i].Nfilial == 0){ //Se = 0 então está na matriz ainda
            local = "Matriz";
          } else {
            local = "Filial_"+matriz[i].Nfilial
          }
          novoObjeto = matriz[i]; //copia a penas o objeto que possui o mesmo id, de um array de objetos
          novoObjeto[local] = Array_select; // insere o local: array, no primeiro caso a Matriz: Array(15)
          matriz[i] = novoObjeto;
          this.storage.set('clientes', matriz); //Salva o novo array de objetos, com apenas a matriz/filial modificada
        }
      }
    });
    }

    openTroncos() {
    //Para adicionar uma nova filial é passado o mesmo ID do objeto e é acrescentado 1 no contador de filiais do objeto
    var clienteId;
    this.storage.get('clientes').then((matriz) => {
      for (let i = 0; i < Object.keys(matriz).length; i++) {
        if (this.clienteId == matriz[i].id){
          matriz[i].Nfilial += 1; //+1 filial
          clienteId = matriz[i].id; //Pega o ID
          this.storage.set('clientes',matriz) //Salva de novo para quando voltar para resultado o novo array_select seja vinculado ao local novo 
          this.navCtrl.push(TroncosPage, { clienteId: clienteId });
        }
      }
    });
    
  }
  
  Salvar(){
    //O botão de salvar é, atualmente, puramente estético, já que a função do resultado já salva.
  }
}
