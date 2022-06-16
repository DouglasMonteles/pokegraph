import { Pokemon } from "../models/pokemon.model";
import data from "../utils/data";

const PokemonService = {

  findAll(): Array<Pokemon> {
    return data;
  }

};

export default PokemonService;