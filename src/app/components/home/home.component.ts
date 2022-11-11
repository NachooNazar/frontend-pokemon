import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';
import Pokemon from 'src/app/types/pokemon.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pokemons: Pokemon[]= [];


  constructor(private PokemonsServices: PokemonsService) { }

  ngOnInit(): void {
   this.getPokemons()
  }
  
  private getPokemons():void {
    this.PokemonsServices.getPokemons().subscribe(p => {
      this.pokemons = p;
    });
  }

   filterType(type:string):void{
    if(type !== "all"){
    this.PokemonsServices.filterPokemons(type).subscribe(p =>{
      this.pokemons = p;
    })}else{
      this.getPokemons()
    }
  }

  filterName(name:string):void{
    console.log(name)
    this.PokemonsServices.filterPokemonByName(name).subscribe(p => this.pokemons= [p]);
  }
}
