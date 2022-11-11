import { Component, Input, OnInit } from '@angular/core';
import Pokemon from 'src/app/types/pokemon.type';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() pokemon!:Pokemon
  private _type: string = this.pokemon?.types ? this.pokemon?.types[0]?.name : "default";
  public get type(): string {
    return this._type;
  }
  public set type(value: string) {
    this._type = value;
  }
  constructor() { }

    ngOnInit(): void {
    
  }

}
