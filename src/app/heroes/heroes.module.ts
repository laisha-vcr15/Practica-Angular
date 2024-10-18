import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { CommonModule } from "@angular/common";

@NgModule({
    exports: [
        HeroComponent
    ],
    declarations:[
        HeroComponent
    
    ],
    imports: [
        CommonModule
    ]
})
export class HeroesModule{}