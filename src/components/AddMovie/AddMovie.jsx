import { useHistory } from 'react-router-dom';
import { useState } from 'react';

function AddMovie(){
    const history = useHistory();
    const[ title, setTitle ] = useState('');
    const[ imageUrl, setImageUrl ] = useState('');
    const[ description, setDescription ] = useState('');
    const[ genre, setGenre ] = useState('');

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

    const newTitle = (event) => {
        setTitle(event.target.value);
    }

    const newImage = (event) => {
        setImageUrl(event.target.value);
    }
    
    const newDescription = (event) => {
        setDescription(event.target.value);
    }

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
                <option value="1">1</option>
                <option value="2">2</option>
            </select>
            <button onClick={saveMovie}>Save</button>
            <button onClick={cancelHandle}>Cancel</button>
        </>
    )   
}

export default AddMovie;
