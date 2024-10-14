import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: 
`
    
    <h1>{{title}}</h1>
<hr>
<h3>Counter : {{counter}}</h3>
<button (click)= "increaseBy()">
  +1

</button>
<br>
<button (click)="decreasedBy()">

  -1
</button>
<br>

<button (click)="resetBy()">
RESET
</button>

<br>

<app-counter></app-counter>
    
    `
})

export class CounterComponent {

    public title: string = 'Laisha B'
    public counter: number =10;
  
  
    increaseBy():void{
      this.counter +=1;
    
    }
  
    decreasedBy():void{
      this.counter -=1;
    }
  
    resetBy():void{
      this.counter =10;
    }
}

