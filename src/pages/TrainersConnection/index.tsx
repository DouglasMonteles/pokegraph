import { useState, useEffect } from 'react';
import { GraphVisualizator } from '../../components/GraphVisualizator';
import { GraphService } from '../../services/graph.service';
import { PokemonService } from '../../services/pokemon.service';
import { TrainerService } from '../../services/trainer.service';
import './styles.css';

export function TrainersConnection() {
  const [graphData, setGraphData] = useState<any[]>([]);

  const ps = new PokemonService();
  const ts = new TrainerService();

  useEffect(() => {
    const data = [] as any;

    ps.findAll().forEach(p => {
      data.push(GraphService.setNode(p.name, p.name, p.image));
    });

    ts.findAll().forEach(t => {
      data.push(GraphService.setNode(t.name, t.name, t.image));
    });

    ts.findAllConnections().forEach(c => {
      data.push(GraphService.setEdge(c.trainer_name, c.pokemon_name));
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