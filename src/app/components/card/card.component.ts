import { Component, OnInit } from '@angular/core';
import Pokemon from 'src/app/types/pokemon.type';
import pokemonType from 'src/app/types/pokemonType.type';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  tipo:pokemonType = {name:"grass"}

  pokemon:Pokemon = { 
    name:"asdasdasdasd",
    image:null,
    weight:null,
    height:null,
    hp:null,
    speed:null,
    defense:null,
    attack:null,
    types:[this.tipo]
};

  constructor() { }

  ngOnInit(): void {
    console.log(this.pokemon.types)
  }

}
