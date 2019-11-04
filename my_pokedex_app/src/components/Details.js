import React, {Component} from 'react';
import './styles/Details.scss';

class Details extends Component {
    state = {
        pokeDetails: null,
    };

    async componentDidMount() {

        const { name } = this.props;

        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/` + name);
            const json_response = await response.json();
            console.log(json_response);

            this.setState({ pokeDetails: json_response });

        } catch (err) {
            console.log(err);

            throw err;
        }
    }

    render() {
        const { pokeDetails } = this.state;

        return (
            pokeDetails &&
            <div className="detailsContainer">
                <h6>ID : {pokeDetails.id}</h6>
                <img src={pokeDetails.sprites.front_default} alt=""/>
                <h2>{pokeDetails.name.toLowerCase()
                            .split(" ")
                            .map(letter => letter.charAt(0).toUpperCase() + letter.substring(1))
                            .join(' ')}
                </h2>
                <p>Weight : {pokeDetails.weight}</p>
                <p>Height : {pokeDetails.height}</p>
            </div>
        );
    }
}

export default Details;