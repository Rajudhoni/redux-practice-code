import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchImages} from './redux/actions';



const AsyncPlanets = () => {
    const dispatch = useDispatch();
    const store = useSelector(state => state.planets);


    useEffect(()=> {
        dispatch(fetchImages())

    },[])
    
    
    console.log(
        "Stores images", store
    )

    return (
        <div>
            <center><h1>Image Albums</h1></center>
            {
                store.map(imageinfo => (
                    <>
                    <p>{imageinfo.title}</p>
                    <img src={imageinfo.url} />
                   </>
                ))
            }
            
        </div>
    )
}

export default AsyncPlanets
