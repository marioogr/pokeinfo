import { Route, Switch } from 'react-router-dom';
import './App.css';
import DetailPokemon from './components/DetailPokemon';
import SearchPokemon from './components/SearchPokemon';

function App() {

  return (
    <div className="App">
        <h2 className='textColor tittle'>PokeInfo</h2>
        <Switch>
          <Route path='/pokemon/:id' exact component={DetailPokemon}>
          </Route>
          <Route exact path='/'>
            <SearchPokemon></SearchPokemon>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
