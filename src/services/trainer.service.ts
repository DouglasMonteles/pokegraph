import { Trainer, TrainerConnection } from "../models/trainer.model";
import { connections, trainers } from "../utils/data";

export class TrainerService {

  constructor() {}

  findAll(): Array<Trainer> {
    return trainers;
  }

  findAllConnections(): Array<TrainerConnection> {
    return connections;
  }

}