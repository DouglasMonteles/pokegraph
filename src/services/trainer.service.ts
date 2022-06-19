import { Trainer, TrainerConnection } from "../models/trainer.model";
import { connections, trainers } from "../utils/data";

export class TrainerService {

  constructor() {}

  public findAll(): Array<Trainer> {
    return trainers;
  }

  public findAllConnections(): Array<TrainerConnection> {
    return connections;
  }

  public insert(name: string): void {
    const trainer: Trainer = {
      name,
      image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAaxJREFUSEu11UnIjmEUxvHfZ2NI2aAUHwtSNkQi9GXcGZMFpUwbygIL6SuRkg0bdpKyYEGIYmNcIVnIAikpJUORDElCp456vHjfZ3jdu2c41/8+9znXuXv859VTUX8o9mA8juBKp/iqgIPYnqKfMQ5v2kGqAs5jWUFwCu53E7AQFzAYl7EY37sJGIQ5+IQ7ncQDXPaIpmIT1mAYnmE2XjQt8gScwrS/CEUXbW0KOIG1eIUBGFEQ/IjReF+3BsPxPIXH4C56W8R24FBdwE4cwBlsweuC0GNMxDscz39u40crrF2Rj2Ij5mdbXioEr8NmzCi8u4VZVQBDMBYPsRt7C8GT8AgzsQor8QThk99W2TYNcy3JyG+I+rQt7i9KWUD0+yh8QZgtdrsa95q2acRHK0Y3vcQCnMRkfMX6fP4np0wGy3EOF7E0Mziczr6W0NqAgbiaY6Ef+1NpLq7jBubV9UHEHcMGPMV0vO0mYFu69ENm8KCw08YZLEIYK+bPirwDiifRGBDDbSR25bhoPeY+3Mw6hNMrF3lfRoSD/5gviMs/RslZnK4D6OSf0t9/AniRVBmG4gZIAAAAAElFTkSuQmCC',
    };

    trainers.push(trainer);
  }

  public insertConnection(trainer_name: string, pokemon_name: string): void {
    const connection: TrainerConnection = {
      trainer_name,
      pokemon_name,
    };

    connections.push(connection);
  }

}