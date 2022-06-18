import { Trainer } from "../models/trainer.model";
import { trainers } from "../utils/data";

export class TrainerService {

  constructor() {}

  findAll(): Array<Trainer> {
    return trainers;
  }

}