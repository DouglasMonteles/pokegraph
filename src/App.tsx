import { useEffect, useState } from "react";
import { GraphVisualizator } from "./components/GraphVisualizator";
import { Pokemon } from "./models/pokemon.model";
import { Trainer } from "./models/trainer.model";
import { GraphService } from "./services/graph.service";
import { PokemonService } from "./services/pokemon.service";
import { TrainerService } from "./services/trainer.service";
import { conections } from "./utils/data";

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [trainers, setTrainers] = useState<Trainer[]>([]);

  useEffect(() => {
    const ps = new PokemonService();
    const ts = new TrainerService();
    const gTreinadorPokemon = new GraphService(8);
    const gPokemonTreinador = new GraphService(8);

    const pokemons = ps.findAll();
    setPokemons(pokemons);

    const trainers = ts.findAll();
    setTrainers(trainers);

    conections.forEach(c => {
      gTreinadorPokemon.addEdge(c.trainer_name, c.pokemon_name);
      gPokemonTreinador.addEdge(c.pokemon_name, c.trainer_name);
    });

    //console.log("GRAFO")
    //console.log(g.graph);

    console.log('BFS');
    gTreinadorPokemon.bfs('Douglas'); // trainer_id
    gPokemonTreinador.bfs('Pikachu'); // pokemon_id

    console.log('DFS');
    gTreinadorPokemon.dfs("Douglas"); // trainer_id
    gPokemonTreinador.dfs('Pikachu'); // pokemon_id
  }, []);

  return (
    <GraphVisualizator />
  );
}

export default App;
