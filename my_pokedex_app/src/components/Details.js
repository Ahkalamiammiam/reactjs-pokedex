import React, {Component} from 'react';
//import axios from 'axios';

class Details extends Component {
    state = {
        name: '',
        index: '',
        sprites: '',
    };

    async componentDidMount() {
        const { index } = this.props;
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/` + index);
            const name = await response.json();
            console.log(index);
            this.setState({ name });
        } catch (err) {
            console.log(err);

            throw err;
        }
    }

    render() {
        const { name } = this.state;
        return (
            <div>
                <h1>{name}</h1>
                <h2>fezfiezjfoizefzi</h2>
            </div>
        );
    }
}

export default Details;