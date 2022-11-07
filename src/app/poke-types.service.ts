import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import pokeTypes from 'src/app/types/pokeTypes';

@Injectable({
  providedIn: 'root'
})
export class PokeTypesService {

  private baseUrl= "http://localhost:8080/api/type";
  
  constructor(private httpClient : HttpClient) { }

  getTypes():Observable<pokeTypes[]>{
    return this.httpClient.get<pokeTypes[]>(`${this.baseUrl}`);
  }
}
