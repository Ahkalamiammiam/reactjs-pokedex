import React, { Component } from 'react';

// Components
import Filtre from '../components/Filtre';

class Pokedex extends Component {
    state = {
        value: '',
    };

    handleSubmit = (ev) => {
        ev.preventDefault();
        const { value } = ev.currentTarget.filter;
        console.log(new FormData(ev.currentTarget).get('filter'));

        this.setState({
            value,
        });
    }

    render() {
        return(
            <div className="App">
                <h1>Hello World !</h1>
                <Filtre value={this.state.value} handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default Pokedex;