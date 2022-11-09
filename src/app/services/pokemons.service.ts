import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Pokemon from 'src/app/types/pokemon.type';

@Injectable({
  providedIn: 'root'
})

export class PokemonsService {

  private baseUrl= "/api/pokemon";
  
  constructor(private httpClient : HttpClient) { }

  getPokemons():Observable<Pokemon[]>{
    return this.httpClient.get<Pokemon[]>(`${this.baseUrl}`);
  }

  filterPokemons(type:string):Observable<Pokemon[]>{
    return this.httpClient.get<Pokemon[]>(this.baseUrl + "/getByType/" + type)
  }
  
}
