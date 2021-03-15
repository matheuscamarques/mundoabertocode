import { Item } from "./abstract/Item";
import { Sprite } from "./abstract/Sprite";

import { Plataforma } from "./abstract/Plataforma";
import { Fase } from "./abstract/Fase";
import { Player } from "./abstract/Player";
import { Entidade, Zero, ZeroSprite } from "./personagens/Zero";
import { Fase0 } from "./fases/Fase0";


  
  
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

    public fases : Array<Fase0> = [
         new Fase0()
    ];
    
    
    
    public players : Array<Entidade> = [
        
    ];
    
    public activePlayer : Zero = this.personagens[0];
    public activeFase   : Fase0  = this.fases[0];
   




}