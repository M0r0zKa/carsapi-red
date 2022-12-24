import React from 'react';
import {useDispatch} from "react-redux";
import {removeCar} from "../store/CarSlice";

function CarItem({car}) {
    const dispatch = useDispatch()

    function deleteCar() {
        dispatch(removeCar(car.id))
    }

    return (
        <label>
            <button onClick={deleteCar}>Del</button>


        </label>
    );
}

export default CarItem;