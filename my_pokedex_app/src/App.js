import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch, useParams } from 'react-router-dom';
import './App.scss';

// Pages
import Pokedex from './pages/Pokedex';

// Component
import Details from './components/Details';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <section className="navbar">
              <div className="logo">
                <h1>Poke React</h1>
              </div>

              <nav>
                <ul>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/pokedex'>Pokedex</Link></li>
                </ul>
              </nav>
            </section>
          </header>

          <div className="homeBloc"></div>
            <div className="homePage">
              <Switch>
              <Route exact path='/pokemon/:name' children={<DetailsWithName />} />
              <Route path='/pokedex'><Pokedex /></Route>
              <Route exact path='/'>
                <p>Bienvenue sur le Pokédex de la PokeApi !</p><br />
                <p>Vous trouverez toutes les informations relatives aux 151 Pokémons</p>
              </Route>
              </Switch>
            </div>
          </div>
      </BrowserRouter>
    );
  }
}

function DetailsWithName() {
  const { name } = useParams();
  console.log();
  return (
    <Details name={name}/>
  );
}

export default App;
