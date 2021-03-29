import * as p5 from "p5";
import { Mundo } from "../Mundo";

export abstract class Sprite{
    abstract andarBaixo() : any[];
    
    public src = '';

   public imagem! : p5.Image  ;
    public width = 50;
    public height = 50;

   
 
    
}