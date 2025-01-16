import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  

  @Output() propagar = new EventEmitter<number>();
  
  @Input()
  public characterList: Character[] = [{
    name: 'Aang',
    power: 10
  }]
  
  //omDeleteID = Index value
  onDeleteCharacter(index: number): void{
    //TODO: Emitir el ID del personaje
    console.log('index ',index);
  }

  onElimina(id: number): void{
    this.propagar.emit(id);
  }
}
