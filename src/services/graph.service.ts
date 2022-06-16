export class GraphService {

  graph: Array<any>;
  visited: Array<boolean>;
  numOfNodes: number;

  constructor(numOfNodes: number) {
    this.numOfNodes = numOfNodes;
    this.graph = this.graphInit();
    this.visited = new Array<boolean>(this.numOfNodes);
  }

  public bfs(node: any): void {
    const queue = [];

    for (let i = 0; i < this.visited.length; i++) {
      this.visited[i] = false;
    }

    this.visited[node] = true;
    queue.push(node); // start with root

    while (queue.length) {
      let currNode = queue.shift(); // process a node

      console.log(`visiting ${currNode}`);
      for (let j = 0; j < this.graph[currNode].length; j++) {
        if (this.graph[currNode][j] === 1 && this.visited[j] === false) {
          // if there's a connection, visit it and record it
          this.visited[j] = true;
          queue.push(j);
        }
      }
    }
  }

  public addEdge(a: any, b: any) {
    for (let i = 0; i < this.graph.length; i++) {
      for (let j = 0; j < this.graph[i].length; j++) {
        if (i === a && j === b) {
          this.graph[i][j] = 1;
          this.graph[j][i] = 1;
        }
      }
    }
  };

  private graphInit(): Array<any> {
    const graph = new Array(this.numOfNodes);
    for (let i = 0; i < graph.length; i++) {
      graph[i] = new Array(this.numOfNodes);
    }

    for (let i = 0; i < graph.length; i++) {
      for (let j = 0; j < graph[i].length; j++) {
        graph[i][j] = 0;
      }
    }

    return graph;
  }

}