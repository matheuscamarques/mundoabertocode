import * as p5 from "p5";
import { Mundo } from "../Mundo";

export abstract class Sprite{
    
    public src = '';

   public imagem : any ;
    public width = 50;
    public height = 50;

    constructor(){
       
    }

    CarregarImagem(){
        
    }
    
     atualizar(){
        
    }
    
    abstract andarCima(): Array<any>;

    abstract andarBaixo(): Array<any>;
    
    abstract andarDireita() : Array<any>;
    
    abstract andarEsquerda() : Array<any>;

    abstract morto() : Array<any>;
    
    abstract attackCima() : Array<any>;

    abstract attackBaixo() : Array<any>;

    abstract attackDireita() : Array<any>;
    
    abstract attackEsquerda() : Array<any>;
    
}