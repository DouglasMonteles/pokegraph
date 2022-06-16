import { useId } from "react";
import { Pokemon } from "../models/pokemon.model";
import { Trainer } from "../models/trainer.model";

const trainers: Array<Trainer> = [
  { id: 1, name: 'Douglas', },
  { id: 2, name: 'Lucas', },
  { id: 3, name: 'Maria', },
  { id: 4, name: 'Carlos', },
];

console.log(trainers);

const conections = [
  { trainer_id: 1, pokemon_id: 1, },
  { trainer_id: 1, pokemon_id: 2, },
  { trainer_id: 1, pokemon_id: 3, },
  { trainer_id: 2, pokemon_id: 1, },
  { trainer_id: 3, pokemon_id: 1, },
  { trainer_id: 2, pokemon_id: 4, },
  { trainer_id: 3, pokemon_id: 4, },
];

const pokemons: Array<Pokemon> = [
  { id: 1, name: 'Pikachu', type: 'electric' },
  { id: 2, name: 'Squardle', type: 'water' },
  { id: 3, name: 'Bubasauro', type: 'grass' },
  { id: 4, name: 'Charmander', type: 'fire' },
];

export {
  trainers,
  pokemons,
  conections,
};