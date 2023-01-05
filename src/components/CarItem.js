import React from 'react';
import {useDispatch} from "react-redux";
import {editCar,deleteCar} from "../store/CarSlice";

function CarItem({car}) {
    const dispatch = useDispatch()

    function deleteCarFx() {
        dispatch(deleteCar(car.id))
    }
    function editCarState() {
        dispatch(editCar(car))
    }


    return (
        <label>
            <button onClick={deleteCarFx}>Del</button>
            <button onClick={editCarState}>Edit</button>
        </label>
    );
}

export default CarItem;