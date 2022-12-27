import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import Car from "./Car";

function Cars(props) {

    const cars = useSelector(state => state.cars.cars)



    return (
        <div>
            {
                cars.map(car => <Car key={car.id} car={car}/>)
            }
        </div>
    );
}

export default Cars;