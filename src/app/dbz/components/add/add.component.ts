import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
@Component({
  selector: 'dbz-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  

  public character: Character = {
    name: 'Loa',
    power: 0
  };
}
