import { Pokemon } from '../../models/pokemon.model';
import './styles.css';

interface PokeCardProps {
  pokemon: Pokemon;
  capiturar: (pokemon: Pokemon) => void;
}

export function PokeCard({ pokemon, capiturar } : PokeCardProps) {

  return (
    <section className="pokemon-card">
      <div className="pokemon-card-data">
        <img 
          src={pokemon.image} 
          alt={`Imagem do pokemon ${pokemon.name}`} 
        />
        <hr/>
        <h2>{pokemon.name}</h2>
        <span>{pokemon.type}</span>
      </div>

      <div className="text-center">
        <button onClick={() => capiturar(pokemon)}>Capturar</button>
      </div>
    </section>
  );
}