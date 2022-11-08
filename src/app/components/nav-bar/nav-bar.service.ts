import { Injectable } from '@angular/core';
import { PokemonsService } from '../pokemons/pokemons.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Pokemon from 'src/app/types/pokemon.type';

@Injectable({
  providedIn: 'root'
})
export class NavBarService extends PokemonsService {


  constructor(httpClient : HttpClient ) {
    super(httpClient);
  }

}
