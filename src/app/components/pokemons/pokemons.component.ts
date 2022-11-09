import { Component, Input, OnInit } from '@angular/core';
import Pokemon from '../../types/pokemon.type';



@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css'],
})
export class PokemonsComponent implements OnInit {

  @Input() pokemons: Pokemon[];

  constructor() {
    this.pokemons=[];
  }    
  

  ngOnInit(): void {    
  }


}
