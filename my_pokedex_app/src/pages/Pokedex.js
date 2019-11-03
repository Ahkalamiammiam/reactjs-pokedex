import React, { Component } from 'react';
import '../components/styles/Pokedex.scss';

// Components
import Filtre from '../components/Filtre';

class Pokedex extends Component {
    state = {
        value: '',
        api: [],
    };

    handleSubmit = async (ev) => {
        const { value } = ev.currentTarget.filter;
        ev.preventDefault();
        console.log(new FormData(ev.currentTarget).get('filter'));

        try {
            
        const response = await fetch(`http://pokeapi.co/api/v2/pokemon?limit=151`);
        const data = await response.json();
        this.setState({ api: data, value });
        console.log(this.state.api);

        } catch (err) {
            console.log(err);

            throw err;
        } 
    }

    render() {
        const { api } = this.state;

        return(
            <div className="pokedexContainer">
                <div className="Pokedex">
                    <h2>Hello World !</h2>
                </div>
                    <Filtre value={this.state.value} handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default Pokedex;