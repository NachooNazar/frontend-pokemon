import { Component, OnInit,OnChanges, SimpleChanges, Injectable } from '@angular/core';
import pokeTypes from 'src/app/types/pokeTypes';
import { PokeTypesService } from '../poke-types/poke-types.service';
import { NavBarService } from './nav-bar.service';
import { PokemonsComponent } from '../pokemons/pokemons.component';
import { FilterTypesService } from 'src/app/services/filter-types.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit,OnChanges{

  types:pokeTypes[]= [];


  selected:String = '';


  constructor(private sendTypes:FilterTypesService, private pokeTypesService: PokeTypesService, private navBarService : NavBarService) { }


  ngOnInit(): void {
    this.getType()
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.sendTypes.sendType(this.selected);
  }

  sendType(type:String):void{

  }
  // private getPokemonsByType():void{
  //   this.navBarService.getPokemonsByType(this.selected).subscribe(pokemons => this.pkmonComponent.getPokemonsByType(pokemons))
  // }
   getType(){
    this.pokeTypesService.getTypes().subscribe(dato => {
      this.types = dato;
    })
  }

}
