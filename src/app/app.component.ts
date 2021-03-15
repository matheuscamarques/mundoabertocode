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
 

  public static width = 500;
  public static height = 500;

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
    };


    p.setup = () => {
      p.createCanvas(AppComponent.width, AppComponent.height,'p2d');
      Controles.startEvents(p,mundo.activePlayer);
      mundo.activeFase.setup();
    };
    
    p.draw = () => {

      let mouse = new Vector2d(p.mouseX,p.mouseY);
      Controles.mouseMove(mundo.activePlayer,mouse);

      p.background(0, 255, 0);
      mundo.activePlayer.vector2d.camera(p);
      mundo.activeFase.draw(p);
     
      //p.move(this.x,this.y);
      mundo.activePlayer.draw(p);
      mundo.activePlayer.update(p);
      
    };

    

  }




 
  


}
