import React from 'react';
import {REQUEST_PLANETS, RECEIVE_PLANETS, FAIL_PLANETS} from '../actionTypes';



const initialState = []
const planets = (state=initialState, action) => {
        console.log("Reducer Payload: ", action.type)
        switch(action.type){
            case REQUEST_PLANETS: 
                return initialState
            case RECEIVE_PLANETS:
                return [...action.payload]
            default:
                return state
        }
}

export default planets
