import React from 'react';

const Filtre = ({ handleSubmit, value }) => (
    <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="filter">Looking for a Pokemon ? </label>
            <input id="" name="filter" type="text" />
            <input type="submit" value="Submit" />
        </form>
        <p>{value}</p>
    </>
);

export default Filtre;