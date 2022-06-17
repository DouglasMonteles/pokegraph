export class GraphService {

  private vertex: number;       // number of vertices in the graph
  private adj: Map<string, Array<string>>; // adjacent list

  constructor(vertex: number) {
    this.vertex = vertex;
    this.adj = new Map<string, Array<string>>();
  }

  // Add a edge to the graph
  public addEdge(v: string, w: string): void {
    const values = this.adj.get(v) ?? [];
    this.adj.set(v, [...values, w]);
  }

  // BFS from a given source s
  public bfs(s: string): Array<string> {
    const result: string[] = [];
    const visited: Array<boolean> = new Array(this.vertex);
    const queue: Array<string> = [];

    for (let i = 0; i < visited.length; i++) {
      visited[i] = false;
    }

    visited[s as any] = true;
    queue.push(s);
    
    while (queue.length !== 0) {
      const elem = queue.shift() as string;
      console.log(elem)
      result.push(elem);
      const arr = this.adj.get(elem);

      if (arr) {
        for (let i of arr) {
          if (!visited[i as any]) {
            visited[i as any] = true;
            queue.push(i);
          }
        }
      }
    }

    return result;
  }

  // public dfs(v: number): void {
  //   const visited = new Array(this.vertex);

  //   for (let i = 0; i < visited.length; i++) {
  //     visited[i] = false;
  //   }

  //   this._dfsUtil(v, visited);
  // }

  // private _dfsUtil(v: number, visited: Array<boolean>): void {
  //   visited[v] = true;

  //   console.log(v);
    
  //   if (!this.adj[v]) return;

  //   for (let i of this.adj[v]) {
  //     let n = i;
  //     if (!visited[n]) {
  //       this._dfsUtil(n, visited);
  //     }
  //   }
  // }

  get graph(): Object {
    return {
      vertex: this.vertex,
      adj: this.adj,
    };
  }

}