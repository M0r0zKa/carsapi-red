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
          if(JSON.stringify(state.newCar) === '{}'){
              state.cars.push({
                  id: new Date().toISOString(),
                  model,
                  price,
                  year,
              })
          } else {
              state.cars = state.cars.filter(car=> car.id !== state.newCar.id)
              state.cars.push({...action.payload, id: state.newCar.id})
              state.newCar = {}
          }

      }  ,
      removeCar(state,action){
          console.log(action.payload);
          state.cars =  state.cars.filter(car=>car.id !== action.payload)
      },

        editCar(state,action){

            state.newCar = action.payload

        }
    }
})


export const {setCars,removeCar,editCar} = carSlice.actions;

export default carSlice.reducer