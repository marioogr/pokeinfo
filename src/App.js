import './App.css';
import ListPokemons from './components/ListPokemons';
import SearchPokemon from './components/SearchPokemon';

function App() {
  return (
    <div className="App">
      <h2 className='textColor'>PokeShop</h2>
      <SearchPokemon></SearchPokemon>
      <ListPokemons></ListPokemons>
    </div>
  );
}

export default App;
