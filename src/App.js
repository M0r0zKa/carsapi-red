import React, {useEffect} from 'react';
import CarForm from "./components/CarForm";
import Cars from "./components/Cars";
import {useDispatch} from "react-redux";
import {fetchCars} from "./store/CarSlice";

function App(props) {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchCars())
    },[dispatch])
  return (
      <div>
        <CarForm/>
          <hr/>
          <Cars/>
      </div>
  );
}

export default App;
