import {createSlice} from "@reduxjs/toolkit";


const carSlice = createSlice({
    name:'cars',
    initialState:{
        cars:[],
        newCar:{}
    },
    reducers:{
      setCars(state,action){
          let {model,price,year} = action.payload
          state.cars.push({
              id: new Date().toISOString(),
              model,
              price,
              year,
          })
          console.log(state.cars);
      }  ,
      removeCar(state,action){
          console.log(action.payload);
          state.cars =  state.cars.filter(car=>car.id !== action.payload)
      },
        editCar(state,action){
            state.newCar = action.payload

            console.log(state.newCar);

        }
    }
})


export const {setCars,removeCar} = carSlice.actions;

export default carSlice.reducer