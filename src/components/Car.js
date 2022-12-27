import React from 'react';
import CarItem from "./CarItem";

function Car({car}) {
    const {model,price,year,id} = car

    return (
        <div>
            <h2>{model}</h2>
            <p>{id}</p>
            <p>{price}</p>
            <p>{year}</p>
            <CarItem car={car} />
        </div>
    );
}

export default Car;