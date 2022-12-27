import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {setCars} from "../store/CarSlice";


function CarForm(props) {

    const {register, handleSubmit, reset, setValue, formState: {errors}} = useForm()
const dispatch = useDispatch()

    const {newCar} = useSelector(state => state.cars)

    const submit = async (data) => {
        if(data.id  !== undefined){
        await    dispatch(setCars(newCar))
        }
       await dispatch(setCars(data))
        reset()
    }

useEffect(()=>{
    setValue('model',newCar.model)
    setValue('price',newCar.price)
    setValue('year',newCar.year)


}, [newCar])


    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type={'text'} placeholder={''} {...register('model',{
                required:true,
                pattern: new RegExp(/^[a-zA-ZА-я]{1,20}$/)
            })}/>
            <input type={'number'} placeholder={''} {...register( 'price',{
                valueAsNumber:true,
                    required: true,
                    min:0,
                    max:1000000
                })
            }/>
            <input type={'number'} placeholder={''} {...register('year', {
                    required: true,
                    min:1990,
                    max:new Date().getFullYear()
                })}/>
<button>{JSON.stringify(newCar) !== '{}' ? 'Edit' : 'Save'}</button>
        </form>
    );
}

export default CarForm;