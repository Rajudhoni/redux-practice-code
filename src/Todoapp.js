import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Addtodoaction, Removetodoaction} from './redux/actions';


const Todoapp = () => {
    const [todo, setTodo] = useState();
    const state = useSelector(state => state.addtodo);
    const dispatch = useDispatch();

   
    console.log("State:", state );
    const removeTodo = (toddo) => {
        const filterstate = state.filter(filtertodo => filtertodo !== toddo);
        dispatch(Removetodoaction(filterstate));
    }
    return (
        <div>
            <center>
                <h1>Todo App using Redux</h1>
                <input type="text" onChange={(e)=> setTodo(e.target.value)} /> 
                <button onClick={()=> dispatch(Addtodoaction(todo))}>AddTodo</button>
                <br></br>
                <ul>
                    {
                        state.map((toddo, indx) => (
                                    <>
                                    <li key={indx}>{toddo}</li> 
                                    <button key={indx} onClick={()=> removeTodo(toddo)}>Completed</button>
                                    </>
                                ))
                    }
                </ul>
            </center>
        </div>
    )
}

export default Todoapp
;