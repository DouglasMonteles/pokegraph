import { ChangeEvent, useState } from 'react';
import { Link, useNavigate, useRoutes } from 'react-router-dom';
import { StorageService } from '../../services/storage.service';
import { TrainerService } from '../../services/trainer.service';
import './styles.css';

export function Home() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  function handleInputUsername(event: ChangeEvent<HTMLInputElement>): void {
    const username = event.target.value;
    setUsername(username);
  }

  function handleConfirmation(): void {
    const ts = new TrainerService();
    
    if (ts.findAll().findIndex(t => t.name === username) !== -1) {
      alert('Este nome de treinador pokemon já está sendo usado! Por favor tente outro');
      setUsername('');
      return;
    }

    ts.insert(username);
    StorageService.setData('username', username);
    navigate('/pokemons');
  }
  
  return (
    <div className="home-container">
      <header className="flex items-center justify-center">
        PokeGraph
      </header>

      <main className="home-content justify-center items-center">
        <aside className="home-subtitle flex text-center">
          Comece a sua jornada como treinador Pokemon! Capture pokémons e veja 
          como se sair bem nas batalhas com outros treinadores.
        </aside>

        <section className="home-user-input">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col">
              <label htmlFor="username">Informe o seu nome:</label>
              <input value={username} onChange={handleInputUsername} type="text" name="username" id="username" placeholder="Nos diga qual será o seu nome de treinador pokemon!"/>
            </div>

            <div className="home-btn flex w-full">
              <button onClick={handleConfirmation} disabled={username.length === 0}>Começar!</button>
            </div>
          </form>
        </section>
      </main>

      <footer className="flex items-center justify-center">
        Primeiro Trabalho de Grafos - Dupla 02
      </footer>
    </div>
  );
}