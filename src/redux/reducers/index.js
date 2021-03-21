import {combineReducers} from 'redux';
import reducer from './vehicle';
import addtodo from './addtodo';
import planets from './planets';


const RootReducer = combineReducers({reducer, addtodo, planets});

export default RootReducer;