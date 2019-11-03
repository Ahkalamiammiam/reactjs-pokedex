import React from 'react';
import './styles/Liste.scss';

// Components
import Item from './Item';

const Liste = ({ pokemons }) => (
    <div className="listeContainer">
        {pokemons.results && pokemons.results.map((pokemon, index) => (
            <Item key={`pokemon` + index} {...pokemon} />
        ))}
    </div>
);

export default Liste;