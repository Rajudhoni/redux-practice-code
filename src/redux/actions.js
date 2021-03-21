import {Bike, Car, ADDTODO, 
        REMOVETODO, RECEIVE_PLANETS,
        REQUEST_PLANETS, FAIL_PLANETS
                } 
                from './actionTypes';
import axios from 'axios';





export const Bikes = () => {
    return {
        type: Bike
    }
}

export const Cars = () =>{
    return{
        type: Car
    }
}

// Todo App Actions
export const Addtodoaction = (data) => {
    return {
        type: ADDTODO, 
        payload: data
    }
}

export const Removetodoaction = (data)=> {
    return {
        type: REMOVETODO,
        payload: data
    }
}


//Planets async operation actions

export const  RequestPlanets = () =>{
    return {
        type: REQUEST_PLANETS
    }
}

export const ReceivePlanets = (planets) => {
    // console.log("Respons in Actions:", planets)
    return{
        type: RECEIVE_PLANETS,
        payload: planets
    }
}

export const FailPlanets = (error) => {
    return{
        type: FAIL_PLANETS,
        payload: error
    }
}


export const fetchImages = () => {
    
    return function(dispatch){
        dispatch(RequestPlanets());
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(response => dispatch(ReceivePlanets(response.data)))
        .catch((error) => dispatch(FailPlanets(error)))
    }
}