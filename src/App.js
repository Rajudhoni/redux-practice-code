import React  from 'react';
import './App.css';
import {useSelector, useDispatch, } from 'react-redux';
import { Bikes, Cars} from './redux/actions';
import Todoapp from './Todoapp';
import AsyncPlanets from './AsyncPlanets';



function App() {
  const counter = useSelector(state => state.reducer);
  console.log("counter state", counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
        <button
          onClick={()=> dispatch(Cars())}
        >Car</button>&nbsp;&nbsp;&nbsp;
        <h1>{counter.vehicle}</h1>
        <button
          onClick={()=> dispatch(Bikes())}
        >
          
            Bike
        </button>
        <hr></hr>
        <Todoapp/>
        <hr></hr>
        <AsyncPlanets/>
    </div>
  );
}

export default App;
