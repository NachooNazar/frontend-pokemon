import { Component, OnInit } from '@angular/core';
import { PokemonsService } from './pokemons.service';
import Pokemon from '../../types/pokemon.type';
import { FilterTypesService } from 'src/app/services/filter-types.service';



@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css'],
})
export class PokemonsComponent implements OnInit {
  pokemons: Pokemon[] = [];

  constructor(private PokemonsServices: PokemonsService,private getTypes:FilterTypesService) { }

  ngOnInit(): void {
    this.getTypes.getType().pipe().subscribe((type:String = '')=>{
      if(type === ''){
        console.log('soy yo');

        this.getPokemons();
      }else{
        console.log('no soy yo');
        this.getPokemonsByType(type);
      }
    })


  }

  private getPokemonsByType(type:String):void{
    this.PokemonsServices.getPokemonsByType(type).subscribe(p =>
      this.pokemons = p)
  }

  private getPokemons():void {
    this.PokemonsServices.getPokemons().subscribe(p => {
      this.pokemons = p;
      console.log(this.pokemons)
    });
  }

}
