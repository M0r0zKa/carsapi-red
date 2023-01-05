import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import Car from "./Car";

function Cars(props) {

    const {cars,status,error} = useSelector(state => state.cars)


    return (
        <div>
            {status === 'Loading' && <h2>Loading...</h2>}
            {error && <h2>An error occerd: {error}</h2>}
            {
                cars.map(car => <Car key={car.id} car={car}/>)
            }
        </div>
    );
}

export default Cars;