import React from 'react';
import './Country.css'

const Country = props => {
    const { name, population, area, flags } = props.country;
    return (
        <div className='single-country'>
            <h1>Name: { name.common }</h1>
            <p>Population: { population }</p>
            <p>Area: { area }</p>
            <img src={ flags.png } alt="" />
        </div>
    );
};

export default Country;