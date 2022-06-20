import CytoscapeComponent from 'react-cytoscapejs';

import './styles.css';

interface GraphVisualizatorProps {
  title: string;
  graphData: Array<any>;
}

export function GraphVisualizator({ title, graphData } : GraphVisualizatorProps) {
  
  return (
    <>
      <div>
        <h1>{ title }</h1>
        <div
          style={{
            border: "1px solid #000",
            backgroundColor: "#f5f6fe",
          }}
        >
          <CytoscapeComponent
            elements={graphData}
            style={{ width: "100%", height: "500px" }}
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
              graphData.forEach(item => {
                cy.elements(`node#${item.data.id}`).css({
                  "width": "40px",
                  "height": "40px",
                  "background-image": "url(" + item.data?.image + ")",
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