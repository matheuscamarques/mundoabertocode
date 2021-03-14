import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import * as p5 from "p5";
import { Player } from "../abstract/Player";
import { Sprite } from "../abstract/Sprite";
import { Vector2d } from "../abstract/Vector2d";
import { Mundo } from "../Mundo";


export class ZeroSprite extends Sprite{
    
    public src = 'assets/imagem/zero.jpg';
       //this.leftRunning;
    public imagem : any = 0;

    

   andarBaixo(){
    return [];
   }

   andarCima(){
    return [];
   }

   morto(){
       return [];
   }

   andarDireita(){
    return [];
   }

   andarEsquerda(){
    return [];
   }

   attackBaixo() {
    return [];
   }
   
   attackCima() {
      return [];
   }

   attackDireita() {
    return [];
   }

   attackEsquerda() {
    return [];
   }


}

export abstract class Entidade {

}

//personagem
export class Zero extends Entidade{
    public tamanho = 50;
    public sprite : Sprite = new ZeroSprite();
    public vector2d : Vector2d =  Vector2d.init({
        x : 0,
        y : 0,
    });

    constructor(){
        super();
        this.sprite = new ZeroSprite();
    }
    
    animacao(event : any){
        return this.sprite.imagem;
    }

    posicaoTela(){
        return this.vector2d.relativeView();
    }

    init(){
        
    }
}
