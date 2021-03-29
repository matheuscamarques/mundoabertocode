import * as p5 from "p5";
import { Sprite } from "../abstract/Sprite";

export class Fase0Sprite extends Sprite {
    andarBaixo(): any[] {
        throw new Error("Method not implemented.");
    }

    public href!: string;
    public imagem!: p5.Image;
    public src = 'assets/imagem/fase_0.png';
    public width = 50;
    public height = 50;

}