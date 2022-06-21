
import { LightningElement,track } from "lwc";


export default class App extends LightningElement {
  
  
  @track nome;
  @track sobrenome;
  resultado;


  mudouNome(event){
    this.nome = String(event.target.value.toUpperCase());
  }

   mudouSobrenome(event){
    this.sobrenome = String(event.target.value.toUpperCase());
  }
   nomeComplet(){
    this.nomeCompleto = this.nome + this.sobrenome;
  }




}
