import * as p5 from "p5";
import { AppComponent } from "src/app/app.component";
import { Point } from "./Point";

export class Vector2d extends p5.Vector{
    constructor(public x = 0, public y = 0){
      super();
    }

    static init(point : Point){
        return new Vector2d(point.x,point.y);
    }

    //
    relativeView(){
      let centro_view= 
      {
          x : AppComponent.width/2,
          y : AppComponent.height/ 2,
      };

      return new Vector2d(centro_view.x - this.x,centro_view.y - this.y);
    }
}