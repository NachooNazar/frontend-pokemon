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

  getBaseUrl():String{
    return this.baseUrl;
  }

  getHttpClient():HttpClient{
    return this.httpClient;
  }

  getPokemons():Observable<Pokemon[]>{
    return this.httpClient.get<Pokemon[]>(`${this.getBaseUrl()}`);
  }

  getPokemonsByType(type:String):Observable<Array<Pokemon>>{
    return this.getHttpClient().get<Pokemon[]>(`${this.getBaseUrl()}/getByType/${type}`)
  }

  filterPokemons(type:string):Observable<Pokemon[]>{
    return this.httpClient.get<Pokemon[]>(this.baseUrl + "/getByType/" + type)
  }

  filterPokemonByName(name:string):Observable<Pokemon>{
    let pokemon= this.httpClient.get<Pokemon>(this.baseUrl + "/search/" + name)
    return pokemon
  }

  getPokemonById(id:number):Observable<Pokemon>{
  return this.httpClient.get<Pokemon>(this.baseUrl + "/detail/" + id)
  }
  
}
