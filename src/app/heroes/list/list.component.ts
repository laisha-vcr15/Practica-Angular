import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] =['Spiderman', 'Super Girl', 'Hulk', 'Thor'];
  
}
