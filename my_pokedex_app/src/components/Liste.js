import React from 'react';
import './styles/Liste.scss';

// Components
import Item from './Item';

const Liste = ({ pokemons }) => (
    <div className="listeContainer">
        {pokemons.results && pokemons.results.map((pokemon, index) => (
            <Item key={`pokemon` + index} {...pokemon} />
            /* <Item key={pokemon.name} 
                  name={pokemon.name} 
                  url={pokemon.url}
            /> */
        ))}
    </div>
);

export default Liste;