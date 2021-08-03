import './Styles/styles.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import SpecificPokemon from './Components/Main/SpecificPokemon/SpecificPokemon';
import SearchBar from './Components/Search/SearchBar';
import Loading from './Components/Loading/Loading';
import AllPokemons from './Components/Main/PokemonList/AllPokemons';
import ControlBar from './Components/ControlBar/ControlBar';

function App() {
  return (
    <div className="App">
    <Router>
      <NavBar/>
      <ControlBar/>
      <Switch>
        <Route exact path ='/'>
          <SearchBar/>
        </Route>
        <Route exact path ='/search-pokemon/:id'>
          <SpecificPokemon/>
        </Route>
        <Route exact path='/all'>
          <AllPokemons/>
        </Route>
        <Route exact path='/loading'>
          <Loading/>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
