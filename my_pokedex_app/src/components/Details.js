import React, {Component} from 'react';

class Details extends Component {
    state = {
        name: '',
        sprites: '',
    };

    async componentDidMount() {
        const { name } = this.props;
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/` + name);
            const json_response = await response.json();
            console.log(json_response);
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