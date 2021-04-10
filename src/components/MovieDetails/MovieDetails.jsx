import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'

function MovieDetails (){
    
    const movie = useSelector(store => store.movies);
    let history = useHistory();
    
    //brings user back to movieslist page
    const returnHome = () => {
        history.push('/')
    }

    return (
        <>
            <div key={movie.id}>
                <h1>{movie.title} Details</h1>
                <p>{movie.description}</p>
                <button onClick={returnHome}>Back to List</button>
            </div>
        </>
    )
}

export default MovieDetails;