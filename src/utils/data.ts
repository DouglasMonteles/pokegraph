import { Pokemon, TypeAdvantage } from "../models/pokemon.model";
import { Trainer, TrainerConnection } from "../models/trainer.model";

const trainers: Array<Trainer> = [
  { name: 'Douglas', image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAaxJREFUSEu11UnIjmEUxvHfZ2NI2aAUHwtSNkQi9GXcGZMFpUwbygIL6SuRkg0bdpKyYEGIYmNcIVnIAikpJUORDElCp456vHjfZ3jdu2c41/8+9znXuXv859VTUX8o9mA8juBKp/iqgIPYnqKfMQ5v2kGqAs5jWUFwCu53E7AQFzAYl7EY37sJGIQ5+IQ7ncQDXPaIpmIT1mAYnmE2XjQt8gScwrS/CEUXbW0KOIG1eIUBGFEQ/IjReF+3BsPxPIXH4C56W8R24FBdwE4cwBlsweuC0GNMxDscz39u40crrF2Rj2Ij5mdbXioEr8NmzCi8u4VZVQBDMBYPsRt7C8GT8AgzsQor8QThk99W2TYNcy3JyG+I+rQt7i9KWUD0+yh8QZgtdrsa95q2acRHK0Y3vcQCnMRkfMX6fP4np0wGy3EOF7E0Mziczr6W0NqAgbiaY6Ef+1NpLq7jBubV9UHEHcMGPMV0vO0mYFu69ENm8KCw08YZLEIYK+bPirwDiifRGBDDbSR25bhoPeY+3Mw6hNMrF3lfRoSD/5gviMs/RslZnK4D6OSf0t9/AniRVBmG4gZIAAAAAElFTkSuQmCC', },
  { name: 'Lucas', image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAaxJREFUSEu11UnIjmEUxvHfZ2NI2aAUHwtSNkQi9GXcGZMFpUwbygIL6SuRkg0bdpKyYEGIYmNcIVnIAikpJUORDElCp456vHjfZ3jdu2c41/8+9znXuXv859VTUX8o9mA8juBKp/iqgIPYnqKfMQ5v2kGqAs5jWUFwCu53E7AQFzAYl7EY37sJGIQ5+IQ7ncQDXPaIpmIT1mAYnmE2XjQt8gScwrS/CEUXbW0KOIG1eIUBGFEQ/IjReF+3BsPxPIXH4C56W8R24FBdwE4cwBlsweuC0GNMxDscz39u40crrF2Rj2Ij5mdbXioEr8NmzCi8u4VZVQBDMBYPsRt7C8GT8AgzsQor8QThk99W2TYNcy3JyG+I+rQt7i9KWUD0+yh8QZgtdrsa95q2acRHK0Y3vcQCnMRkfMX6fP4np0wGy3EOF7E0Mziczr6W0NqAgbiaY6Ef+1NpLq7jBubV9UHEHcMGPMV0vO0mYFu69ENm8KCw08YZLEIYK+bPirwDiifRGBDDbSR25bhoPeY+3Mw6hNMrF3lfRoSD/5gviMs/RslZnK4D6OSf0t9/AniRVBmG4gZIAAAAAElFTkSuQmCC', },
  { name: 'Maria',image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAaxJREFUSEu11UnIjmEUxvHfZ2NI2aAUHwtSNkQi9GXcGZMFpUwbygIL6SuRkg0bdpKyYEGIYmNcIVnIAikpJUORDElCp456vHjfZ3jdu2c41/8+9znXuXv859VTUX8o9mA8juBKp/iqgIPYnqKfMQ5v2kGqAs5jWUFwCu53E7AQFzAYl7EY37sJGIQ5+IQ7ncQDXPaIpmIT1mAYnmE2XjQt8gScwrS/CEUXbW0KOIG1eIUBGFEQ/IjReF+3BsPxPIXH4C56W8R24FBdwE4cwBlsweuC0GNMxDscz39u40crrF2Rj2Ij5mdbXioEr8NmzCi8u4VZVQBDMBYPsRt7C8GT8AgzsQor8QThk99W2TYNcy3JyG+I+rQt7i9KWUD0+yh8QZgtdrsa95q2acRHK0Y3vcQCnMRkfMX6fP4np0wGy3EOF7E0Mziczr6W0NqAgbiaY6Ef+1NpLq7jBubV9UHEHcMGPMV0vO0mYFu69ENm8KCw08YZLEIYK+bPirwDiifRGBDDbSR25bhoPeY+3Mw6hNMrF3lfRoSD/5gviMs/RslZnK4D6OSf0t9/AniRVBmG4gZIAAAAAElFTkSuQmCC', },
  { name: 'Carlos',image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAaxJREFUSEu11UnIjmEUxvHfZ2NI2aAUHwtSNkQi9GXcGZMFpUwbygIL6SuRkg0bdpKyYEGIYmNcIVnIAikpJUORDElCp456vHjfZ3jdu2c41/8+9znXuXv859VTUX8o9mA8juBKp/iqgIPYnqKfMQ5v2kGqAs5jWUFwCu53E7AQFzAYl7EY37sJGIQ5+IQ7ncQDXPaIpmIT1mAYnmE2XjQt8gScwrS/CEUXbW0KOIG1eIUBGFEQ/IjReF+3BsPxPIXH4C56W8R24FBdwE4cwBlsweuC0GNMxDscz39u40crrF2Rj2Ij5mdbXioEr8NmzCi8u4VZVQBDMBYPsRt7C8GT8AgzsQor8QThk99W2TYNcy3JyG+I+rQt7i9KWUD0+yh8QZgtdrsa95q2acRHK0Y3vcQCnMRkfMX6fP4np0wGy3EOF7E0Mziczr6W0NqAgbiaY6Ef+1NpLq7jBubV9UHEHcMGPMV0vO0mYFu69ENm8KCw08YZLEIYK+bPirwDiifRGBDDbSR25bhoPeY+3Mw6hNMrF3lfRoSD/5gviMs/RslZnK4D6OSf0t9/AniRVBmG4gZIAAAAAElFTkSuQmCC', },
];

const pokemons: Array<Pokemon> = [
  { name: 'Pikachu', type: 'electric', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg' },
  { name: 'Poliwag', type: 'water', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/60.svg', },
  { name: 'Bubasauro', type: 'grass', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg', },
  { name: 'Charmander', type: 'fire', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg', },
];

const types: Array<string> = [
  'Bug',      // 0
  'Dark', 
  'Dragon', 
  'Electric', 
  'Fairy', 
  'Fighting', // 5
  'Fire', 
  'Flying', 
  'Ghost', 
  'Grass', 
  'Ground', // 10
  'Ice', 
  'Normal', 
  'Poison', 
  'Psychic',
  'Rock', // 15
  'Steel',
  'Water',
];

const connections: Array<TrainerConnection> = [
  { trainer_name: trainers[0].name, pokemon_name: pokemons[0].name, },
  { trainer_name: trainers[0].name, pokemon_name: pokemons[1].name, },
  { trainer_name: trainers[0].name, pokemon_name: pokemons[2].name, },
  { trainer_name: trainers[1].name, pokemon_name: pokemons[0].name, },
  { trainer_name: trainers[1].name, pokemon_name: pokemons[2].name, },
  { trainer_name: trainers[2].name, pokemon_name: pokemons[0].name, },
  { trainer_name: trainers[2].name, pokemon_name: pokemons[3].name, },
  { trainer_name: trainers[3].name, pokemon_name: pokemons[0].name, },
];

const typesAdvantage: Array<TypeAdvantage> = [
  { type: types[0], advantage: types[1], },
  { type: types[0], advantage: types[9], },
  { type: types[0], advantage: types[14], },
  { type: types[1], advantage: types[8], },
  { type: types[1], advantage: types[14], },
  { type: types[2], advantage: types[11], },
  { type: types[3], advantage: types[7], },
  { type: types[3], advantage: types[17], },
  { type: types[4], advantage: types[1], },
  { type: types[4], advantage: types[2], },
  { type: types[4], advantage: types[5], },
  { type: types[5], advantage: types[1], },
  { type: types[5], advantage: types[12], },
  { type: types[5], advantage: types[15], },
  { type: types[5], advantage: types[16], },
  { type: types[6], advantage: types[0], },
  { type: types[6], advantage: types[11], },
  { type: types[6], advantage: types[9], },
  { type: types[6], advantage: types[16], },
  { type: types[7], advantage: types[0], },
  { type: types[7], advantage: types[5], },
  { type: types[7], advantage: types[9], },
  { type: types[8], advantage: types[14], },
  { type: types[9], advantage: types[10], },
  { type: types[9], advantage: types[15], },
  { type: types[9], advantage: types[17], },
  { type: types[10], advantage: types[3], },
  { type: types[10], advantage: types[6], },
  { type: types[10], advantage: types[13], },
  { type: types[10], advantage: types[15], },
  { type: types[10], advantage: types[16], },
  { type: types[11], advantage: types[3], },
  { type: types[11], advantage: types[7], },
  { type: types[11], advantage: types[9], },
  { type: types[11], advantage: types[10], },
  { type: types[12], advantage: types[8], },
  { type: types[13], advantage: types[4], },
  { type: types[13], advantage: types[9], },
  { type: types[14], advantage: types[5], },
  { type: types[14], advantage: types[13], },
  { type: types[15], advantage: types[0], },
  { type: types[15], advantage: types[6], },
  { type: types[15], advantage: types[7], },
  { type: types[15], advantage: types[11], },
  { type: types[16], advantage: types[4], },
  { type: types[16], advantage: types[11], },
  { type: types[16], advantage: types[15], },
  { type: types[17], advantage: types[6], },
  { type: types[17], advantage: types[10], },
  { type: types[17], advantage: types[15], },
]

export {
  trainers,
  pokemons,
  connections,
  types,
  typesAdvantage,
};