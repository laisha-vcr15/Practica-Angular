import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {
<<<<<<< HEAD
    
    public characters: Character[] = [{
        name: 'Krilin',
        power: 400
    }, {
        name: 'Azula',
        power: 24
=======
    public characters: Character[] = [{
        name: 'Krilin',
        power: 100
    },
    {
            name: 'Goku',
            power: 9500
>>>>>>> 01adc30f7cd855b9434632d5848963f5a3e26842
    }];
}