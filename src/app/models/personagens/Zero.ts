import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import * as p5 from "p5";
import { AppComponent } from "src/app/app.component";
import { Player } from "../abstract/Player";
import { Sprite } from "../abstract/Sprite";
import { Vector2d } from "../abstract/Vector2d";
import { Mundo } from "../Mundo";


export class ZeroSprite extends Sprite {

    public src = 'assets/imagem/zero.jpg';
    //this.leftRunning;
    public imagem: any = 0;



    andarBaixo() {
        return [];
    }

    andarCima() {
        return [];
    }

    morto() {
        return [];
    }

    andarDireita() {
        return [];
    }

    andarEsquerda() {
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


export class Atributos{
    [key: string]: string | number;
    public vitality   :  number | any = 0; 
    public attunement :  number | any = 0; 
    public endurance  :  number | any = 0; 
    public strength   :  number | any = 0;
    public dexterity  :  number | any = 0;
    public resistance    :  number | any = 0;
    public intelligence  :  number | any = 0;
    public faith :  number | any = 0;
    public lucky : number | any = 0;
}

function getRandomArbitrary(min = 0, max = 0) {
    return Math.random() * (max - min) + min;
}

//personagem
export class Zero extends Entidade {
    public name = "Zero";
    public atributos : Atributos = new Atributos();

    public tamanho = 50;
    public sprite: Sprite = new ZeroSprite();
    public vector2d: Vector2d = Vector2d.init({
        x: 0,
        y: 0,
    });

    //diminui quando recebe magia/ataque -> aumenta com o poções de vida
    set life(life){
        this.life = life;
    }
    get life(){
        return 50 + this.atributos.vitality
    }

    //diminui quando utiliza magia/ataque -> aumenta com o tempo
    set stamina(stamina){
        this.stamina = stamina;
    }
    get stamina(){
        return 50 + this.atributos.endurance;
    }
    
    constructor() {
        super();
        this.sprite                 = new ZeroSprite();
        this.atributos.vitality     = Math.round(getRandomArbitrary(0,100));
        this.atributos.attunement   = Math.round(getRandomArbitrary(0,100));
        this.atributos.endurance    = Math.round(getRandomArbitrary(0,100));
        this.atributos.strength     = Math.round(getRandomArbitrary(0,100));
        this.atributos.dexterity    = Math.round(getRandomArbitrary(0,100));
        this.atributos.resistance   = Math.round(getRandomArbitrary(0,100));
        this.atributos.intelligence = Math.round(getRandomArbitrary(0,100));
        this.atributos.faith        = Math.round(getRandomArbitrary(0,100));
        this.atributos.lucky        = Math.round(getRandomArbitrary(0,100));


    }

    barraDeLife(p: p5) {

        //Faleceu
        if(this.life <= 0 ){  this.life = 0;  }

        
        let tam = this.tamanho / 2;

        //Barra vermelha de vida
        p.fill(255, 0, 0);
        p.rect(this.x - tam, this.y - (tam + 10), this.life, 5);

         //Barra verde de vida
        p.fill(0, 255, 0);
        p.rect(this.x - tam, this.y - (tam + 10), this.life, 5);
    }

    drawName(p : p5){
        let tam = this.tamanho / 2;
        p.fill(255, 255, 255);
        p.textSize(15);
        p.text(this.name,this.x - tam, this.y - (tam + 15));
    }


    get level (){
        let count = 0 ;

        for(let atributo in this.atributos){
            let attr : string = this.atributos[atributo] as string;
            count = count + parseInt(attr);
        }
        return count
    }

    drawAtributos( p : p5 ){
        let tam = 35/2
        let count = 35;
        p.fill(255, 255, 255);
        p.textSize(tam);
      
        for(let atributos in this.atributos){
            let value = this.atributos[atributos];
            let icon = '';
            
            switch(atributos){
                case 'lucky' : icon        = '🍀' ; break;
                case 'faith' : icon        = '🙏' ; break
                case 'intelligence' : icon = '🧠' ; break
                case 'resistance' : icon   = '🛡️ ' ; break
                case 'dexterity' : icon    = '🗡️' ; break
                case 'strength' : icon     = '💪' ; break
                case 'endurance' : icon    = '🏃‍♂️ ' ; break
                case 'attunement' : icon   = '📖' ; break
                case 'vitality' : icon     = '💓' ; break
            }

            p.text(icon + "\t" + value ,this.x - (AppComponent.width/2) + 10, this.y + ( AppComponent.height/2)  - count);
            count+=tam;
        }
        p.text('LEVEL' + "\t" + this.level ,this.x - (AppComponent.width/2) + 10, this.y + ( AppComponent.height/2)  - count - 10);
        count+=tam;
       
    }

    drawSprite( p : p5){
        let tam = this.tamanho / 2;
        p.image(this.sprite.imagem, this.x - tam,this.y - tam);
    }


    draw(p: p5) {
        if (!!this.sprite.imagem) {
            this.hud(p);
            this.drawName(p);
            this.barraDeLife(p);
            this.drawSprite(p);
            this.drawAtributos(p);
        }
    }



    hud(p: p5){
         //Faleceu
         if(this.life <= 0 ){  this.life = 0;  }

        let director_x = 10;
        let director_y = 10;
        
        
         let tam = this.tamanho / 2;
         p.image(this.sprite.imagem, this.x - (AppComponent.width/2) + director_x ,this.y - ( AppComponent.height/2) + director_y);
        
         //Barra vermelha de vida
         p.fill(255, 0, 0);
         p.rect(this.x -  (AppComponent.width/2) + tam*2 + director_x, this.y -( AppComponent.height/2) + director_y, this.life, 5);
 
          //Barra verde de stamina

         p.fill(0, 255, 0);
         p.rect(this.x -  (AppComponent.width/2) + tam*2 + director_x, this.y - ( AppComponent.height/2) + 10 + director_y, this.stamina, 5);


    }


    // tamanhoDaVida(value : number){
    
    //     let y = value;
    //     let porcent  = (y*100) / 50;  
    // }

    animacao(event: any) {
        return this.sprite.imagem;
    }

   

    posicaoTela() {
        return this.vector2d.relativeView();
    }

    loadSprite(p: any) {
        let src = this.sprite.src;
        p.loadImage(src,
            (img: p5.Image) => {
                console.log("Carregou Imagem!");
                img.resize(this.tamanho, this.tamanho)
                this.sprite.imagem = img;
            },
            (erro: Event) => {
                console.log(erro);
            }
        );
    }

    update(p: p5) {

        //this.vector2d.move(this.vector2d.relative(p.mouseX,p.mouseY));
    }

    camera(p: p5) {
        this.vector2d.camera(p);
    }

    init() {

    }

    get x() {
        return this.vector2d.relativeView().x;
    }

    get y() {
        return this.vector2d.relativeView().y;
    }
}
