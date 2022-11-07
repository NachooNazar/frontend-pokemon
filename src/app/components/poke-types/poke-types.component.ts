import { Component, OnInit } from '@angular/core';
import pokeTypes from 'src/types/pokeTypes';
import { PokeTypesService } from '../../poke-types.service';

@Component({
  selector: 'app-poke-types',
  templateUrl: './poke-types.component.html',
  styleUrls: ['./poke-types.component.css'],
})
export class PokeTypesComponent implements OnInit {
  pokeTypes: pokeTypes[] = [];

  constructor(private pokeTypesService: PokeTypesService) {}

  ngOnInit(): void {
    this.getType();
    console.log(this.pokeTypes)
  }

  private getType(){
    this.pokeTypesService.getTypes().subscribe(dato => {
      this.pokeTypes = dato;
    })
  }
}
