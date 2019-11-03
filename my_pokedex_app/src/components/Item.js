import React from 'react';

const Item = ({ name, sprites, weight, height }) => (
    <li>
        <h2>{name}</h2>
        <img src={sprites} alt=""/>
        <h3>{weight}</h3>
        <h3>{height}</h3>
    </li>
);

export default Item;