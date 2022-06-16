import { Trainer } from "../models/trainer.model";
import { trainers } from "../utils/data";

export class TrainerService {

  private trainers: Trainer[];

  constructor() {
    this.trainers = trainers;
  }

  findAll(): Array<Trainer> {
    return this.trainers;
  }

}