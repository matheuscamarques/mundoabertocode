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
 

  public static width = window.outerWidth/1.5;
  public static height =  window.outerHeight/1.5;

  ngOnInit() {
    this.createCanvas();
  
  }

  private createCanvas() {
    this.p5 = new p5(this.sketch);
  }

  private sketch(p: p5) {
    var mundo = new Mundo();

    p.preload = () => {
      mundo.activePlayer.loadSprite(p);
      mundo.activeFase.loadSprite(p);
    };


    p.setup = () => {
      let e : any= document.getElementById("defaultCanvas0");
      e.style.margin = "0 auto";
      e.style.display = "flex";
      p.createCanvas(AppComponent.width, AppComponent.height,'p2d');
      Controles.startEvents(p,mundo.activePlayer);
      mundo.activeFase.setup();
    };
    
    p.draw = () => {

      if (p.mouseIsPressed) {
        Controles.mouseMove(p,mundo.activePlayer,new Vector2d(p.mouseX,p.mouseY));
      }
      

      p.background(0, 255 ,0);

     
      
      mundo.activePlayer.camera(p);
      mundo.activeFase.draw(p);
     
      //p.move(this.x,this.y);
      mundo.activePlayer.draw(p);
      mundo.activePlayer.update(p);
      
    };

    

  }




 
  


}
