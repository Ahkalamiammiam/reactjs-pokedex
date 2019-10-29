import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';

// Pages
import Pokedex from './pages/Pokedex';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/pokedex'>Pokedex</Link></li>
            </ul>
          </nav>

          <Switch>
            <Route exact path='/'>Home</Route>
            <Route path='/pokedex'><Pokedex /></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
