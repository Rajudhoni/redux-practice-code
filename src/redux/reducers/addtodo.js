import React from 'react'
import {ADDTODO, REMOVETODO} from '../actionTypes';

const initialState = []
const addtodo = (state =initialState, action) => {
    switch(action.type){
        case ADDTODO:
            return [...state, action.payload]
        
        case REMOVETODO:
            return [...action.payload]
        default: 
            return state
        
    }
}

export default addtodo
