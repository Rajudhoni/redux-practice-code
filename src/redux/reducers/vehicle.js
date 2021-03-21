import React from 'react';
import {Bike, Car} from '../actionTypes';

const initialState = {
    vehicle: ''
}
const reducer = (state=initialState, action)=> {

    switch(action.type){
        case Bike:
            return{
                vehicle: "It's a  Bike"
            };
        case Car:
            return{
                vehicle: "It is a Car"
            };
        default:
            return "No";
    }
}

export default reducer;

