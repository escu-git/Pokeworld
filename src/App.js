import './Styles/styles.css';
import NavBar from './Components/NavBar/NavBar';
import MainContainer from './Components/Main/MainContainer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SearchBar from './Components/Search/SearchBar';
import Loading from './Components/Loading/Loading';

function App() {
  return (
    <div className="App">
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path ='/'>
          <SearchBar/>
        </Route>
        <Route exact path ='/search-pokemon/:id'>
          <MainContainer/>
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
