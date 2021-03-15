import * as p5 from "p5";
import { Fase } from "../abstract/Fase";
import { Mundo } from "../Mundo";


class ElementoMapa{
    x: any;
    y: number;
    cor: string;
    tam: number;
    

    constructor(posx : number,posy:number,cor : string ,tam :number){
        this.x =posx;
        this.y = posy;
        this.cor = cor;
        this.tam = tam;
    }

    draw(p : p5){
        p.fill(this.cor);
        //noFill();
        //Image(img,0,0);
        //square(this.x,this.y,this.tam);
        p.rect(this.x,this.y,this.tam,this.tam);
    }
}

class BlocoAzul extends ElementoMapa{

    constructor(posx : number,posy:number){
        super(posx,posy,'blue',Mundo.tamanho_blocos);
    }
}

class BlocoVermelho extends ElementoMapa{

    constructor(posx : number,posy:number){
        super(posx,posy,'red',Mundo.tamanho_blocos);
    }
}


class BlocoAmarelo extends ElementoMapa{

    constructor(posx : number,posy:number){
        super(posx,posy,'yellow',Mundo.tamanho_blocos);
    }
}

class BlocoPreto extends ElementoMapa{

    constructor(posx : number,posy:number){
        super(posx,posy,'black',Mundo.tamanho_blocos);
    }
}



export class Fase0 extends Fase{

    public tamanho_blocos = Mundo.tamanho_blocos;

    public blocos = [BlocoPreto,BlocoAzul];

    public matrix = [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    ];

    public elementos: Array<ElementoMapa> = [];

    setup(){
        for (let i = 0; i < this.matrix.length; i++) {
            for(let j=0;j< this.matrix[i].length;j++) {
                let k = this.matrix[i][j];
                let bloco = new this.blocos[k](j*this.tamanho_blocos,i*this.tamanho_blocos);
               this.elementos.push(bloco);
            }
        }
    }

    draw(p : p5){
        for (let i = 0; i < this.elementos.length; i++) {
            this.elementos[i].draw(p);
         }

    }
}