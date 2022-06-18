import { useEffect, useState } from 'react'
import CytoscapeComponent from 'react-cytoscapejs';

import { GraphService } from '../../services/graph.service';
import { PokemonService } from '../../services/pokemon.service';
import { TrainerService } from '../../services/trainer.service';
import { conections } from '../../utils/data';

import './styles.css';

export function GraphVisualizator() {
  const [width, setWith] = useState("100%");
  const [height, setHeight] = useState("500px");
  const [graphData, setGraphData] = useState([]);

  const ts = new TrainerService();
  const ps = new PokemonService();

  const trainers = ts.findAll();
  const pokemons = ps.findAll();
  const types = ps.findAllTypes();
  const typesAdvantage = ps.findAllTypesAdvantage();

  function setNode(id: string, label: string): Object {
    const node = {
      data: {
        id,
        label,
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
    
    trainers.forEach(t => {
      data.push(setNode(t.name, t.name));
    });

    pokemons.forEach(t => {
      data.push(setNode(t.name, t.name));
    });

    //types.forEach(type => data.push(setNode(type, type)));

    const gs = new GraphService(trainers.length + pokemons.length);

    conections.forEach(c => {
      gs.addEdge(c.trainer_name, c.pokemon_name);
      data.push(setEdge(c.trainer_name, c.pokemon_name));
    });

    // typesAdvantage.forEach(t => {
    //   gs.addEdge(t.type, t.advantage);
    //   data.push(setEdge(t.type, t.advantage));
    // });

    //console.log(gs.dfs('Water'))

    // trainers.forEach(t => {
    //   const result = gs.bfs(t.name);
      
    //   result.forEach((r, index) => {
    //     if (index > 0) {
    //       data.push({
    //         data: {
    //           source: t.name,
    //           target: r,
    //           label: 'Label',
    //         }
    //       });
    //     }
    //   });
    // });
    
  
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
        <h1>PokeGraph</h1>
        <div
          style={{
            border: "1px solid #000",
            backgroundColor: "#f5f6fe",
          }}
        >
          <CytoscapeComponent
            elements={graphData}
            style={{ width: width, height: height }}
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
              trainers.forEach(t => {
                cy.elements(`node#${t.name}`).css({
                  "width": "40px",
                  "height": "40px",
                  "background-image": "url(" + t.image + ")",
                  "background-fit": "contain",
                });
              });

              pokemons.forEach(p => {
                cy.elements(`node#${p.name}`).css({
                  "width": "40px",
                  "height": "40px",
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