import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PokeCard } from '../../components/PokeCard';
import { Pokemon } from '../../models/pokemon.model';
import { GraphService } from '../../services/graph.service';
import { PokemonService } from '../../services/pokemon.service';
import { StorageService } from '../../services/storage.service';
import { TrainerService } from '../../services/trainer.service';

import './styles.css';

export function Pokemons() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [username, setUsername] = useState('');

  const ps = new PokemonService();
  const ts = new TrainerService();
  const gs = new GraphService(100);

  useEffect(() => {
    ts.findAllConnections().forEach(c => {
      gs.addEdge(c.trainer_name, c.pokemon_name);
    });
  }, []);

  useEffect(() => {
    setUsername(StorageService.getData('username'));
  }, []);

  useEffect(() => {
    let pokemons = ps.findAll();

    const bfsResult = gs.bfs(StorageService.getData('username'));

    bfsResult.forEach((r, index) => {
      if (index !== 0) {
        const index2 = pokemons.findIndex(p => p.name === r);

        if (index2 !== -1) {
          pokemons = pokemons.filter(p => p.name !== r);
        }
      }
    });

    setPokemons(pokemons);
  }, []);

  function capiturar(pokemon: Pokemon): void {
    gs.addEdge(username, pokemon.name);
    ts.insertConnection(username, pokemon.name);

    setPokemons(pokemons.filter(p => p.name !== pokemon.name));
  }

  return (
    <>
      <Link to="/trainers-connections">Grafo de conexões de treinadores com pokemons</Link>
      <br />
      <Link to="/trainers-connections">Veja os seus pokemons</Link>
      <h1>Olá { username }</h1>

      <main className="flex flex-wrap">
        {
          pokemons.map(pokemon => (
            <PokeCard 
              key={pokemon.name}
              pokemon={pokemon}
              capiturar={capiturar}
            />
          ))
        }
      </main>
    </>
  );
}