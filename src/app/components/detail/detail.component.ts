import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonsService } from 'src/app/services/pokemons.service';
import Pokemon from 'src/app/types/pokemon.type';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
 
  types:string=""
  pokemon: Pokemon = {
    id: 0,
    name: null,
    image: null,
    weight: null,
    height: null,
    hp: null,
    speed: null,
    defense: null,
    attack: null,
    types: null,
  };

  constructor(
    private route: ActivatedRoute,
    private PokemonsServices: PokemonsService
  ) {
    this.route.params.subscribe((params) => {
      this.getDetail(params['id']);
    });
  }

  ngOnInit(): void {}

  getDetail(id: number): void {
    this.PokemonsServices.getPokemonById(id).subscribe((p) => {
      (this.pokemon.name = p.name? p.name.toLocaleUpperCase():""),
        (this.pokemon.attack = p.attack),
        (this.pokemon.defense = p.defense),
        (this.pokemon.height= p.height);
        (this.pokemon.hp= p.hp),
        (this.pokemon.image= p.image),
        (this.pokemon.speed= p.speed),
        (this.pokemon.types= p.types),
        (this.pokemon.weight= p.weight),
        (this.pokemon.id= p.id),
        (this.types= p.types? p.types[0]?.name: "default")
    });
  }
}
