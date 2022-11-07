import { Component, Input, OnInit } from '@angular/core';
import pokeTypes from 'src/types/pokeTypes';
import { PokeTypesService } from '../poke-types/poke-types.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  types:pokeTypes[]= [];

  constructor(private pokeTypesService: PokeTypesService) { }

  ngOnInit(): void {
    this.getType()
  }

   getType(){
    this.pokeTypesService.getTypes().subscribe(dato => {
      this.types = dato;
    })
  }

}
