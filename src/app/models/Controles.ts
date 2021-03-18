import * as p5 from "p5";
import { Vector2d } from "./abstract/Vector2d";
import { Mundo } from "./Mundo";
import { Zero } from "./personagens/Zero";




export class Controles{


    static startEvents(p : p5,entidade : any){
        document.addEventListener('keypress' , (event)=>{
            entidade.vector2d.moveEvent(p5,event.key);
        });   
    }


    static mouseMove(p : p5,entidade : Zero,mouse : Vector2d){

        p.cursor(p.CROSS);
         mouse = mouse.relativeView();
         mouse.setMag(5);
         entidade.vector2d.add(mouse.x,mouse.y);
       // entidade.vector2d.move(entidade.vector2d.relative(mouse.x,mouse.y));
       
        //entidade.life  -= 0.5;
    }


}