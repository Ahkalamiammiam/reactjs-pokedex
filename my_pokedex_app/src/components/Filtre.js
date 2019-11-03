import React from 'react';
import '../components/styles/Filtre.scss';

const Filtre = ({ handleSubmit, value }) => (
    <>
        <div className="formContainer">
            <form onSubmit={handleSubmit}>
                <input name="filter" type="text" />
                <label htmlFor="filter" className="labelName">
                    <span className="contentName">Pokemon</span>
                </label>
                <input type="submit" value="Submit" />
            </form>
        <p>{value}</p>
        </div>
    </>
);

export default Filtre;