import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {setCars} from "../store/CarSlice";


function CarForm(props) {

    const {register, handleSubmit, reset, setValue, formState: {errors}} = useForm()
const dispatch = useDispatch()

    const submit = async (data) => {
        console.log(data);
        dispatch(setCars(data))
        reset()
    }

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
<button>Save</button>
        </form>
    );
}

export default CarForm;