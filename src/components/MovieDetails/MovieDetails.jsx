import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'

function MovieDetails(props){
    
    const movie = useSelector(store => store.movies);
    const history = useHistory();
    const dispatch = useDispatch();
    const details = useSelector(store => store.details);


    
    //brings user back to movieslist page
    const returnHome = () => {
        history.push('/')
    }
    
    //sends action type to saga to get display the details
    useEffect(() => {
        dispatch({ type: 'FETCH_DETAILS', payload: props.details.id });
    }, []);


    //renders all data to the DOM
    return (
        <>
            <div key={movie.id}>
                <h1>{props.details.title}</h1>
                <p>{props.details.description}</p>
                {details.map(genre => {
                    return (
                        <p>{genre.name}</p>
                    )
                    })}
                <button onClick={returnHome}>Back to List</button>
            </div>
        </>
    )
}

export default MovieDetails;