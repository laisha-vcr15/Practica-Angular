import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string= 'Ironman';
  public age: number = 45;


  get capilizedName(): string{
    return this.name.toUpperCase();

    this.capilizedName
  }

  getHeroDescription():string{
    return `${this.name} -${this.age}`;
  }

  changeHero():void{
    this.name='Chapulin colorade';
  }

  changeAge():void{

    this.age=80;
  }
  resetForm():void{
    this.age = 45;
   document.querySelectorAll('h1')!.forEach(element => {
    element.innerHTML = '<h1>Desde Angular</h>'
   }) ;
  }


}

