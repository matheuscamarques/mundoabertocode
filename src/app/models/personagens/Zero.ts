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

    draw(p : any){
        if(!!this.sprite.imagem){
            let x = this.vector2d.relativeView().x;
            let y = this.vector2d.relativeView().y;
            let tam = this.tamanho/2;
            p.image(this.sprite.imagem,x-tam,y-tam);
         }
    }
    
    animacao(event : any){
        return this.sprite.imagem;
    }

    posicaoTela(){
        return this.vector2d.relativeView();
    }

    loadSprite(p : any){
        let src = this.sprite.src;
        p.loadImage(src,
            (img : p5.Image) => {
                console.log("Carregou Imagem!");
                img.resize(this.tamanho,this.tamanho)
                this.sprite.imagem = img;
             },
           (erro : Event)=>{
              console.log(erro);
           }
           );
    }

    update(p: p5) {
        
        //this.vector2d.move(this.vector2d.relative(p.mouseX,p.mouseY));
    }

    init(){
        
    }
}
