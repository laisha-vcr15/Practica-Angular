import { Component, Input } from '@angular/core';

@Component({
  selector: 'dbz-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  @Input() characterList: any[]=[];
}
