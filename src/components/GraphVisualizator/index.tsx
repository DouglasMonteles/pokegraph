import { useEffect, useState } from 'react'
import CytoscapeComponent from 'react-cytoscapejs';
import { GraphService } from '../../services/graph.service';
import { PokemonService } from '../../services/pokemon.service';
import { TrainerService } from '../../services/trainer.service';
import { conections, trainers } from '../../utils/data';

import './styles.css';

export function GraphVisualizator() {
  const [width, setWith] = useState("100%");
  const [height, setHeight] = useState("400px");
  //Adding elements here
  const [graphData, setGraphData] = useState([]);

  const ts = new TrainerService();
  const ps = new PokemonService();

  const trainers = ts.findAll();
  const pokemons = ps.findAll();
  
  useEffect(() => {
    const data = [] as any;
    
    trainers.forEach(t => {
      data.push({
        data: {
          id: t.name,
          label: t.name,
        },

        position: {
          x: Math.floor(Math.random() * 390),
          y: Math.floor(Math.random() * 390),
        }
      });
    });

    pokemons.forEach(t => {
      data.push({
        data: {
          id: t.name,
          label: t.name,
        },

        position: {
          x: Math.floor(Math.random() * 390),
          y: Math.floor(Math.random() * 390),
        }
      });
    });

    const gs = new GraphService(trainers.length + pokemons.length);

    conections.forEach(c => {
      gs.addEdge(c.trainer_name, c.pokemon_name);
    });

    trainers.forEach(t => {
      const result = gs.bfs(t.name);
      
      result.forEach((r, index) => {
        if (index > 0) {
          data.push({
            data: {
              source: t.name,
              target: r,
              label: 'Label',
            }
          });
        }
      });
    });
    
  
    // conections.forEach(c => {
    //   data.push({
    //     data: {
    //       source: c.trainer_id,
    //       target: c.pokemon_id,
    //       label: 'Label',
    //     }
    //   });
    // });
  
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
            textureOnViewport={true}
            cy={(cy) => {
              //"background-image": "url('data:image/png;base64,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')",
              trainers.forEach(t => {
                cy.elements(`node#${t.name}`).css({
                  "background-image": "url(" + t.image + ")",
                  "background-fit": "contain",
                });
              });

              pokemons.forEach(p => {
                cy.elements(`node#${p.name}`).css({
                  "background-image": "url(" + p.image + ")",
                  "background-fit": "contain",
                });
              });
            }}
            stylesheet={[
              {
                selector: "node",
                style: {
                  "background-color": "#fff",
                  width: 120,
                  height: 120,
                  label: "data(label)",
                  "text-halign": "center",
                  "text-outline-width": "2px",
                  "overlay-padding": "6px",
                },
              },
              {
                selector: "node:selected",
                style: {
                  "border-width": "6px",
                  "border-color": "#AAD8FF",
                  "background-color": "#77828C",
                  "text-outline-color": "#77828C"
                }
              },
              {
                selector: "label",
                style: {
                  color: "white",
                  width: 30,
                  height: 30,
                }
              },
              {
                selector: "edge",
                style: {
                  width: 3,
                  "line-color": "#AAD8FF",
                  "target-arrow-color": "#6774cb",
                  "target-arrow-shape": "triangle",
                  "curve-style": "bezier",
                }
              }
            ]}
          />
        </div>
      </div>
    </>
  );
}