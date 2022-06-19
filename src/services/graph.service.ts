export class GraphService {

  private vertex: number;       // number of vertices in the graph
  private adj: Map<string, Array<string>>; // adjacent list

  constructor(vertex: number) {
    this.vertex = vertex;
    this.adj = new Map<string, Array<string>>();
  }

  public static setNode(id: string, label: string, image: string = ''): Object {
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

  public static setEdge(source: string, target: string): Object {
    const edge = {
      data: {
        source,
        target,
        label: `${source} -> ${target}`,
      }
    };

    return edge;
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

  public dfs(v: string): Array<string> {
    const visited = new Map<string, boolean>();
    const result: Array<string> = [];

    this._dfsUtil(v, visited, result);
    return result;
  }

  private _dfsUtil(v: string, visited: Map<string, boolean>, result: Array<string>): void {
    visited.set(v, true);

    console.log(v);
    result.push(v);

    for (let i of this.adj.get(v) ?? []) {
      let n = i;
      if (!visited.get(n)) {
        this._dfsUtil(n, visited, result);
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