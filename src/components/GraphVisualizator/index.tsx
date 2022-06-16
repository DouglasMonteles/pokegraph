import { randomInt } from 'crypto';
import { useEffect, useState } from 'react'
import CytoscapeComponent from 'react-cytoscapejs';
import { Pokemon } from '../../models/pokemon.model';
import { Trainer } from '../../models/trainer.model';
import { GraphService } from '../../services/graph.service';
import { PokemonService } from '../../services/pokemon.service';
import { TrainerService } from '../../services/trainer.service';
import { conections } from '../../utils/data';

import './styles.css';

export function GraphVisualizator() {
  const [width, setWith] = useState("100%");
  const [height, setHeight] = useState("400px");
  //Adding elements here
  const [graphData, setGraphData] = useState([]);

  const ts = new TrainerService();
  const ps = new PokemonService();
  const data = [] as any;

  useEffect(() => {
    ts.findAll().forEach(t => {
      data.push({
        data: {
          id: t.id,
          label: t.name,
        },

        position: {
          x: Math.floor(Math.random() * 390),
          y: Math.floor(Math.random() * 390),
        }
      });
    });

    ps.findAll().forEach(t => {
      data.push({
        data: {
          id: t.id,
          label: t.name,
        },

        position: {
          x: Math.floor(Math.random() * 390),
          y: Math.floor(Math.random() * 390),
        }
      });
    });
  
    conections.forEach(c => {
      data.push({
        data: {
          source: c.trainer_id,
          target: c.pokemon_id,
          label: 'Label',
        }
      });
    });
  
    setGraphData(data);
  }, []);

  return (
    <>
      <div>
        <h1>My Cytoscape example</h1>
        <div
          style={{
            border: "1px solid",
            backgroundColor: "#f5f6fe"
          }}
        >
          <CytoscapeComponent
            elements={graphData}
            style={{ width: width, height: height }}
            //adding a layout
            layout={{
              name: 'breadthfirst',
              fit: true,
              directed: true,
              padding: 50,
              animate: true,
              animationDuration: 1000,
              avoidOverlap: true,
              nodeDimensionsIncludeLabels: false,
            }}
          />
        </div>
      </div>
    </>
  );
}