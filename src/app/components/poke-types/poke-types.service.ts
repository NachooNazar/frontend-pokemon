import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import pokeTypes from 'src/types/pokeTypes';

@Injectable({
  providedIn: 'root'
})
export class PokeTypesService {

  private baseUrl= "/api/type";

  constructor(private httpClient : HttpClient) { }

  getTypes():Observable<pokeTypes[]>{
    return this.httpClient.get<pokeTypes[]>(`${this.baseUrl}`);
  }
}