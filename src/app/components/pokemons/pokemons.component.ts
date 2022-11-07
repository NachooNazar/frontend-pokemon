import { Component, OnInit } from '@angular/core';
import { PokemonsService } from './pokemons.service';
import Pokemon from '../../types/pokemon.type';



@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css'],
})
export class PokemonsComponent implements OnInit {
  pokemons: Pokemon[] = [];

  constructor(private PokemonsServices: PokemonsService) { }

  ngOnInit(): void {
    this.getPokemons();
    
  }

  private getPokemons() {
    this.PokemonsServices.getPokemons().subscribe(p => {
      this.pokemons = p;
      console.log(this.pokemons)
    });
  }

}
