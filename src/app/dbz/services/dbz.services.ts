import { Injectable } from "@angular/core";
import { Character } from "../interfaces/character.interface";
import { v4 as uuid} from 'uuid';
@Injectable({
    providedIn: 'root'

    
})

export class DbzService {

    public characters: Character[] = [
        {id: uuid(), name: 'Krilin', power: 400 },
        {id: uuid(), name: 'Azula', power: 24 },
        {id: uuid(), name: 'Aang', power: 10 }
      ];

      onNewCharacter(character: Character):void{
        this.characters.push(character);
      }
      onDeleteChar(character: number):void{
        this.characters.splice(character, 1);
      }
  
}

