import { useState, useEffect } from 'react';
import { getGifs } from '../services/getGifs.Service';


export const useFetchGifs = ( category ) => {

    // hook's state
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    // hook effect with service http get
    useEffect(() => {
        getGifs( category )
        .then( imgs => {
            //setTimeout for show data in time determinate
            setstate({
                data: imgs,
                loading: false
            });
            
        })
    },[category]);

    return state;

}
