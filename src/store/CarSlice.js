import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {useState} from "react";

export const fetchCars = createAsyncThunk(
    'cars/fetchCars',
    async function (_, {rejectWithValue}) {

        try {
            const response = await fetch('http://owu.linkpc.net/api/v2/cars')
            if (!response.ok) {
                throw new Error('Server Error')
            }
            const data = await response.json()

            return data;
        } catch (error) {
            return rejectWithValue(error.message)
        }

    }
)

export const deleteCar = createAsyncThunk(
    'cars/deleteCar',
    async function (id, {rejectWithValue, dispatch}) {
        try {
            const response = await fetch(`http://owu.linkpc.net/api/v2/cars/${id === 'undefined'?'dsadsa':''}`, {
                method: 'DELETE',
            })

            if (!response.ok) {
                throw Error('Not delete')
            }
            dispatch(removeCar(id))

        } catch (error) {
            return rejectWithValue(error.message)

        }
    }
)

export const AddNewCar = createAsyncThunk(
    'cars/AddNewCar',
    async function (car, {rejectWithValue,dispatch  }) {

        try {
            const newFormData = new FormData()
            newFormData.append("model", `${car.model}`)
            newFormData.append("price", `${car.price}`)
            newFormData.append("year",`${car.year}`)
            console.log(car);
            const response = await fetch(`http://owu.linkpc.net/api/v2/cars/${car.id}`, {
                method: 'PUT',
                redirect: 'follow',
                body: newFormData
            })

            if (!response.ok) {
                throw new Error('Error')
            }

            const data = await response.json()
            dispatch(fetchCars())
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
const carSlice = createSlice({
    name: 'cars',
    initialState: {
        cars: [],
        newCar: {},
        status: null,
        error: null
    },
    reducers: {
        setCars(state, action) {
            let {model, price, year} = action.payload.data
            if (JSON.stringify(state.newCar) === '{}') {
                state.cars.push({
                    id: ++state.cars.length,
                    model,
                    price,
                    year,
                })
            } else {
                state.cars = state.cars.filter(car => car.id !== state.newCar.id)
                state.cars.push({...action.payload, id: state.newCar.id})
                state.newCar = {}
            }
        },
        removeCar(state, action) {
            console.log(action.payload);
            state.cars = state.cars.filter(car => car.id !== action.payload)
        },

        editCar(state, action) {

            state.newCar = action.payload

        }
    },
    extraReducers: {
        [fetchCars.pending]: (state, action) => {
            state.status = 'Loading';
            state.error = null;
        },
        [fetchCars.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.cars = action.payload
        },
        [fetchCars.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload
        },
        [AddNewCar.rejected]:(state,action)=>{
            state.status = 'rejected';
            state.error = action.payload
        }

    }
})


export const {setCars, removeCar, editCar} = carSlice.actions;

export default carSlice.reducer