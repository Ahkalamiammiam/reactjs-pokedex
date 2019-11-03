import React, { Component } from 'react';
import '../components/styles/Pokedex.scss';

// Components
import Filtre from '../components/Filtre';
import Liste from '../components/Liste';

class Pokedex extends Component {
    state = {
        value: '',
        api: [],
    };

    handleSubmit = async (ev) => {
        ev.preventDefault();
        const { value } = ev.currentTarget.filter;
        console.log(new FormData(ev.currentTarget).get('filter'));

        try {
            
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`);
        const data = await response.json();
        this.setState({ api: data, value });

        } catch (err) {
            console.log(err);

            throw err;
        }
    }


    render() {
        const { api } = this.state;
        console.log(this.state.api);

        return(
            <div className="pokedexContainer">
                <div className="Pokedex">
                    <h2>Recherchez un Pokémon !</h2>
                </div>
                    <Filtre value={this.state.value} handleSubmit={this.handleSubmit} />
                    <Liste pokemons={api} />
            </div>
        );
    }
}

export default Pokedex;