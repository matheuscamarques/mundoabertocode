import { Component } from '@angular/core';
import * as p5 from 'p5';
import { Vector2d } from './models/abstract/Vector2d';
import { Mundo } from './models/Mundo';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})




export class AppComponent {
  title = 'mundoaberto';
  public p5?: p5;
 

  public static width = 500;
  public static height = 500;

  ngOnInit() {
    this.createCanvas();
  }

  private createCanvas() {
    this.p5 = new p5(this.sketch);
  }

  private sketch(p: p5) {
    //var mundo = this.mundo;
    var mundo = new Mundo();

    p.preload = () => {
       let src = Mundo.sprites_players[0].src;
       p.loadImage(src,
        (img : p5.Image) => {
            console.log("Carregou Imagem!");
            img.resize(mundo.activePlayer.tamanho,mundo.activePlayer.tamanho)
            mundo.activePlayer.sprite.imagem = img;
         },
       (erro : Event)=>{
          console.log(erro);
       }
       );
    };


    p.setup = () => {
      let src = '';
      

      p.createCanvas(AppComponent.width, AppComponent.height);
     
      
      document.addEventListener('keypress' , (event)=>{

         console.log(event.key);
          if(event.key == 'w'){
              mundo.activePlayer.vector2d.y += 10 ;
          }
          if(event.key == 's'){
            mundo.activePlayer.vector2d.y -= 10 ;
          }
          if(event.key == 'd'){
            mundo.activePlayer.vector2d.x -= 10 ;
          }
          if(event.key == 'a'){
            mundo.activePlayer.vector2d.x += 10 ;
          }

      }); 


    };
    
    p.draw = () => {
      //console.log(Mundo.sprites_players[0].imagem);
      
      p.background(255, 0, 255);


      //mundo.activePlayer.sprite.atualizar();
     // console.log(mundo.activePlayer.sprite.imagem);
      if(!!mundo.activePlayer.sprite.imagem){
         let x = mundo.activePlayer.vector2d.relativeView().x;
         let y = mundo.activePlayer.vector2d.relativeView().y;
         let tam = mundo.activePlayer.tamanho/2;
        p.image(mundo.activePlayer.sprite.imagem,x-tam,y-tam);
      }
     // console.log("B",mundo.activePlayer.sprite);

      let posicao = Vector2d.init({ x: 50 / 2, y: 50 / 2 });

      let objeto = posicao.relativeView();
      //console.log(objeto);
      //p.rect(objeto.x, objeto.y, tamanho_bloco, tamanho_bloco);

    };

    

  }

  


}
