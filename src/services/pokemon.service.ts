import { Pokemon, TypeAdvantage } from "../models/pokemon.model";
import { pokemons, types, typesAdvantage } from "../utils/data";

export class PokemonService {

  constructor() {}

  findAll(): Array<Pokemon> {
    return pokemons;
  }

  findAllTypes(): string[] {
    return types;
  }

  findAllTypesAdvantage(): Array<TypeAdvantage> {
    return typesAdvantage;
  }

}