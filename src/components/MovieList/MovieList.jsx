import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'

function MovieList(props) {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    let history =  useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const showDetails = (movie) => {
        props.setDetails({id: movie.id, description: movie.description, title: movie.title, poster: movie.poster})
        history.push('/details/' + movie.id )
        console.log('in showDetails:', movie );
    }

    return (
        <main>
            <h1>Movie List</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div onClick={()=>showDetails(movie)} key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}/>
                            {/* testing how to make the selector for the details page */}
                            {/* ^^<p>{movie.description}</p> */} 
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;