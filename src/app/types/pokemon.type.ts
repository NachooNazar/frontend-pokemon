import pokemonType from "./pokemonType.type"

export default interface Pokemon{
    name:string|null,
    image:string|null,
    weight:number|null,
    height:number|null,
    hp:number|null,
    speed:number|null,
    defense:number|null,
    attack:number|null,
    types:pokemonType[]|null
}