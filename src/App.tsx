import { useEffect, useState } from "react";
import { Pokemon } from "./models/pokemon.model";
import { GraphService } from "./services/graph.service";
import PokemonService from "./services/pokemon.service";

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const pokemons = PokemonService.findAll();
    setPokemons(pokemons);

    const gs = new GraphService(7);

    gs.addEdge(1, 2);
    gs.addEdge(1, 5);
    gs.addEdge(2, 3);
    gs.addEdge(2, 5);
    gs.addEdge(3, 4);
    gs.addEdge(4, 5);
    gs.addEdge(4, 6);

    gs.bfs(1);
  }, []);

  return (
    <ul>
      {
        pokemons.map(pokemon => (
          <li key={pokemon.id}>Name: {pokemon.name} - Type: {pokemon.type}</li>
        ))
      }
    </ul>
  );
}

export default App;
