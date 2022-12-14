import { Component, OnInit, Input } from '@angular/core';
import pokemonType from 'src/app/types/pokemonType.type';
import { PokeTypesService } from '../poke-types/poke-types.service';
import { Output, EventEmitter } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit{

  types:pokemonType[]= [];

  //este evento lo voy a utilizar en la home para traerme el tipo seleccionado
  @Output() newItemEvent = new EventEmitter<string>();
  @Output() EventName = new EventEmitter<string>();
  @Input() selected: string= "";
  @Input() name: string= "";

  constructor(private pokeTypesService: PokeTypesService) {}
  ngOnInit(): void {
    this.getType();
  }
   
  //trae todos los tipos
 private getType():void{
    this.pokeTypesService.getTypes().subscribe(dato => {
      this.types = dato;
    })
  }

  //envia el value del option a la home
  filterType(){
    this.newItemEvent.emit(this.selected)
  }

  filterName(){
    this.EventName.emit(this.name)
  }

}

//quiero tomar el valor de cada option, luego enviarlo, al componente padre que es home, y la home va a tener el servicio con los pokemons, el componentee
//pokemons solamente seria el contenedor, es un componente bobo.