import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { GraphVisualizator } from "./components/GraphVisualizator";
import { Pokemon } from "./models/pokemon.model";
import { Trainer } from "./models/trainer.model";
import { GraphService } from "./services/graph.service";
import { PokemonService } from "./services/pokemon.service";
import { TrainerService } from "./services/trainer.service";
import { conections, pokemons } from "./utils/data";

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [trainers, setTrainers] = useState<Trainer[]>([]);
  const [graphData, setGraphData] = useState<any[]>([]);

  const ps = new PokemonService();
  const ts = new TrainerService();

  function setNode(id: string, label: string, image: string = ''): Object {
    const node = {
      data: {
        id,
        label,
        image,
      },

      position: {
        x: Math.floor(Math.random() * 390),
        y: Math.floor(Math.random() * 390),
      }      
    };

    return node;
  }

  function setEdge(source: string, target: string): Object {
    const edge = {
      data: {
        source,
        target,
        label: `${source} -> ${target}`,
      }
    };

    return edge;
  }

  useEffect(() => {
    const data = [] as any;

    ps.findAll().forEach(p => {
      data.push(setNode(p.name, p.name, p.image));
    });

    ts.findAll().forEach(t => {
      data.push(setNode(t.name, t.name, t.image));
    });

    conections.forEach(c => {
      data.push(setEdge(c.trainer_name, c.pokemon_name));
    });

    setGraphData(data);
  }, []);

  return (
    <GraphVisualizator 
      title={'PokeGraph'}
      graphData={graphData}
    />
  );
}

export default App;
