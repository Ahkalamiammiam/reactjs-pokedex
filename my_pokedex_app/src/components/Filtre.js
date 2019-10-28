import React from 'react';

const Filtre = props => (
    <>
        <form onSubmit={props.handleSubmit}>
            <label htmlFor="filter">Looking for a Pokemon ? </label>
            <input id="" name="filter" type="text" />
            <input type="submit" value="Submit" />
        </form>
        <p>{props.value}</p>
    </>
);

export default Filtre;