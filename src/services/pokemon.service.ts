import { Pokemon } from "../models/pokemon.model";
import { pokemons } from "../utils/data";

export class PokemonService {

  private pokemons: Pokemon[];

  constructor() {
    this.pokemons = pokemons;
  }

  findAll(): Array<Pokemon> {
    return this.pokemons;
  }

}