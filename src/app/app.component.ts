import { Component } from '@angular/core';
import * as p5 from 'p5';
import { Vector2d } from './models/abstract/Vector2d';
import { Controles } from './models/Controles';
import { Mundo } from './models/Mundo';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})




export class AppComponent {
  title = 'mundoaberto';
  public p5?: p5;


  public static width = 900;
  public static height = 600;

  ngOnInit() {
    this.createCanvas();

  }

  private createCanvas() {
    this.p5 = new p5(this.sketch);
  }

  private sketch(p: p5) {
    var mundo = new Mundo();
    let ultimoX = 0;
    let ultimoY = 0;

    p.preload = () => {
      mundo.activePlayer.loadSprite(p);
      mundo.activeFase.loadSprite(p);
    };


    p.setup = () => {
      let e: any = document.getElementById("defaultCanvas0");
      e.style.margin = "0 auto";
      e.style.display = "flex";

      p.createCanvas(AppComponent.width, AppComponent.height);
      p.frameRate(30);
      Controles.startEvents(p, mundo.activePlayer);
      mundo.activeFase.setup();
    };

    p.draw = () => {

      if (p.mouseIsPressed) {
        Controles.mouseMove(p, mundo.activePlayer, new Vector2d(p.mouseX, p.mouseY));
      }


      p.background(0, 255, 0);


      //função para limitar as bordas 
      //Player
      mundo.activePlayer.x
      mundo.activePlayer.y
      //fase
      mundo.activeFase.getHeight();
      mundo.activeFase.getWidth();
      //tela
      AppComponent.height
      AppComponent.width
      // if (AppComponent.height != mundo.activeFase.getHeight() && AppComponent.width != mundo.activeFase.getWidth())



      //pos + metadedacamera < bordasDaFase
      //     x - centrodatel
      let x = Math.round(mundo.activePlayer.x);
      let y = Math.round(mundo.activePlayer.y);

      // x - AppComponent.width.      x com o limite da esquerda
      // y - AppComponent.height.     y com o limite de cima. 
      //typeof mundo.activeFase.matrix[mundo.activeFase.matrix.length - 1 ][mundo.activeFase.matrix[0].length-1]
      //console.log(mundo.activeFase.matrix.length, mundo.activeFase.matrix[0].length);

     

      
      
      if (y                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      <   ((mundo.activeFase.matrix.length - 1) * 50) &&
          x  <   ((mundo.activeFase.matrix[0].length - 1) * 50) &&
          x >= 0 && y - 250>= 0
        ){
        p.translate(mundo.activePlayer.vector2d.x, mundo.activePlayer.vector2d.y);
        ultimoX = mundo.activePlayer.vector2d.x;
        ultimoY = mundo.activePlayer.vector2d.y;
      }
      else
        p.translate(ultimoX, ultimoY);

      
      //  }else{
      //    p.translate(ultimoX,ultimoY);
      //  }

      //  if(y < (mundo.activeFase.matrix[0].length-1) * 50){
      //    mundo.activePlayer.camera(p);
      //  }

      // Teste GUi
      //  if (50 - AppComponent.width - x != 50)
      //    mundo.activePlayer.camera(p);




      // 520 x 910.6
      // 1200 x 2700

      mundo.activeFase.draw(p);
    
      mundo.activePlayer.draw(p);
      mundo.activePlayer.update(p);

    };



  }








}
