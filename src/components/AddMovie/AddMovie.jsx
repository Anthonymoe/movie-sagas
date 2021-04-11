import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function AddMovie(){
    
    const history = useHistory();
    const genres = useSelector(store => store.genres);
    const dispatch= useDispatch();
    
    //states for inputs
    const[ title, setTitle ] = useState('');
    const[ imageUrl, setImageUrl ] = useState('');
    const[ description, setDescription ] = useState('');
    const[ genre, setGenre ] = useState('');

    //gets Genres to use for the genre select
    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES' });
        console.log( 'genres', genres);
    }, []);
    
    //object with all input data to be sent to the db
    let newMovie = {
        title: title, 
        image: imageUrl, 
        description: description, 
        genre: genre 
    }
    
    //brings user back to homepage/MovieList
    const cancelHandle = () => {
        history.push('/')
    }

    //adds movie to db and brings user back home 
    const saveMovie = () => {
        console.log( newMovie );
    }
    //handles value change of title
    const newTitle = (event) => {
        setTitle(event.target.value);
    }
    //handles value change of imageUrl
    const newImage = (event) => {
        setImageUrl(event.target.value);
    }
    //handles value change of description
    const newDescription = (event) => {
        setDescription(event.target.value);
    }
    //handles value change of genre
    const newGenre = (event) => {
        setGenre(event.target.value);
    }
    
    return(
        <>
            <h1>Add a Movie</h1>
            <input onChange={newTitle} type="text" placeholder="Title"/>
            <input onChange={newImage} type="text" placeholder="Image URL"/>
            <textarea onChange={newDescription} placeholder="Description...." name="description" id="desc" cols="30" rows="10"></textarea>
            <select onChange={newGenre} name="" id="">
                <option value="">genre</option>
                <option value="">genre2</option>
            </select>
            <button onClick={saveMovie}>Save</button>
            <button onClick={cancelHandle}>Cancel</button>
        </>
    )   
}

export default AddMovie;
