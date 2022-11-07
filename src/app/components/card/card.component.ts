import { Component, Input, OnInit } from '@angular/core';
import Pokemon from 'src/app/types/pokemon.type';
import pokemonType from 'src/app/types/pokemonType.type';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  tipo:pokemonType = {name:"grass"}

  @Input() pokemon!:Pokemon

  constructor() { }

    ngOnInit(): void {
    
  }

}
