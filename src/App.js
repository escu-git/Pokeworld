import './Styles/styles.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import SpecificPokemon from './Components/Main/SpecificPokemon/SpecificPokemon';
import Loading from './Components/Loading/Loading';
import AllPokemons from './Components/Main/PokemonList/AllPokemons';
import ControlBar from './Components/ControlBar/ControlBar';
import FilteredByType from './Components/Main/FilteredByType/FilteredByType';
import  {PokemonTypeProvider}  from './Contexts/PokeContext';

function App() {
  return (
    <div className="App">
    <PokemonTypeProvider>
      <Router>
        <NavBar/>
        <ControlBar/>
        <Switch>
          <Route exact path ='/'>
          <Loading/>
          </Route>
          <Route exact path ='/search-pokemon/:id'>
            <SpecificPokemon/>
          </Route>
          <Route exact path='/pokemons/all'>
            <AllPokemons/>
          </Route>
          <Route exact path='/filtered-pokemons/:id'>
            <FilteredByType/>
          </Route>
          <Route exact path='/loading'>
            <Loading/>
          </Route>
        </Switch>
      </Router>
    </PokemonTypeProvider>
    </div>
  );
}

export default App;
