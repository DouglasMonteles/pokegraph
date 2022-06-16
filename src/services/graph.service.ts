export class GraphService {

  private vertex: number;       // number of vertices in the graph
  private adj: Array<number>[]; // adjacent list

  constructor(vertex: number) {
    this.vertex = vertex;
    this.adj = new Array(this.vertex);

    for (let i = 0; i < vertex; ++i) {
      this.adj[i] = [];
    }
  }

  // Add a edge to the graph
  public addEdge(v: number, w: number): void {
    this.adj[v].push(w);
  }

  // BFS from a given source s
  public bfs(s: number): void {
    const visited: Array<boolean> = new Array(this.vertex);
    const queue: Array<number> = [];

    for (let i = 0; i < visited.length; i++) {
      visited[i] = false;
    }

    visited[s] = true;
    queue.push(s);
    
    while (queue.length !== 0) {
      const elem = queue.shift() as number;
      console.log(elem)
      const arr = this.adj[elem];

      if (!arr) return;

      for (let i of arr) {
        if (!visited[i]) {
          visited[i] = true;
          queue.push(i);
        }
      }
    }
  }

  public dfs(v: number): void {
    const visited = new Array(this.vertex);

    for (let i = 0; i < visited.length; i++) {
      visited[i] = false;
    }

    this._dfsUtil(v, visited);
  }

  private _dfsUtil(v: number, visited: Array<boolean>): void {
    visited[v] = true;

    console.log(v);
    
    if (!this.adj[v]) return;

    for (let i of this.adj[v]) {
      let n = i;
      if (!visited[n]) {
        this._dfsUtil(n, visited);
      }
    }
  }

  get graph(): Object {
    return {
      vertex: this.vertex,
      adj: this.adj,
    };
  }

}