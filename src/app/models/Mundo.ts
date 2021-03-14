import { Item } from "./abstract/Item";
import { Sprite } from "./abstract/Sprite";

import { Plataforma } from "./abstract/Plataforma";
import { Fase } from "./abstract/Fase";
import { Player } from "./abstract/Player";
import { Entidade, Zero, ZeroSprite } from "./personagens/Zero";


  
  
export class Mundo{

    public static tamanho_blocos = 50;
    
    public static sprites_players : Array<Sprite> = [
        new ZeroSprite()
    ];
    public static plataformas : Array<Plataforma> = [];
    public static items : Array<Item> = [];
    public personagens : Array<Zero> = [
         new Zero()
    ]

    public static fases : Array<Fase> = [];
    
    
    
    public players : Array<Entidade> = [
        
    ];
    
    public activePlayer : Zero = new Zero();
  static activePlayer: any;
   




}