import React, { Component } from 'react';

// Components
import Filtre from '../components/Filtre';

class Pokedex extends Component {
    state = {
        value: '',
        api: []
    };

    handleSubmit = async (ev) => {
        ev.preventDefault();
        const { value } = ev.currentTarget.filter;
        console.log(new FormData(ev.currentTarget).get('filter'));

        try {
            
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`);
        const data = await response.json();
        this.setState({ api: data });
        console.log(this.state.api);

        } catch (err) {
            console.log(err);

            throw err;
        } 
    }

    render() {
        const { data } = this.state;

        return(
            <div className="App">
                <h1>Hello World !</h1>
                <Filtre value={this.state.value} handleSubmit={this.handleSubmit} />
                {<p>{data}</p>}
            </div>
        );
    }
}

export default Pokedex;