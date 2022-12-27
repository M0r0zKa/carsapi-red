import React from 'react';
import {useDispatch} from "react-redux";
import {editCar, removeCar} from "../store/CarSlice";

function CarItem({car}) {
    const dispatch = useDispatch()

    function deleteCar() {
        dispatch(removeCar(car.id))
    }
    function editCarState() {
        dispatch(editCar(car))
    }


    return (
        <label>
            <button onClick={deleteCar}>Del</button>
            <button onClick={editCarState}>Edit</button>
        </label>
    );
}

export default CarItem;