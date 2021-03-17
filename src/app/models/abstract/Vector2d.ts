import * as p5 from "p5";
import { AppComponent } from "src/app/app.component";
import { Point } from "./Point";

export class Vector2d extends p5.Vector {
  public centroView = {
    x: AppComponent.width / 2,
    y: AppComponent.height / 2,
  };
  constructor(public x = 0, public y = 0) {
    super();
  }

  static init(point: Point) {
    return new Vector2d(point.x, point.y);
  }

  //
  relativeView() {
    return new Vector2d(this.centroView.x - this.x, this.centroView.y - this.y);
  }

  relative(x: any ,y : any){
    return new Vector2d(this.centroView.x - x, this.centroView.y - y);
  }

  
  updateX(x : any){
    this.x += x;
  }

  updateY(y : any){
      this.y += y;
  }

  move(vector2d : Vector2d){
    this.x = vector2d.x;
    this.y = vector2d.y;
  }

  moveEvent(p:p5 , key : string) {
    if (key == 'w') {
      this.y += 10;
      
    }
    if (key == 's') {
      this.y -= 10;
    }
    if (key == 'd') {
      this.x -= 10;
    }
    if (key == 'a') {
      this.x += 10;
    }
  }


  camera(p : p5){
    p.translate(this.x,this.y);
  }
}