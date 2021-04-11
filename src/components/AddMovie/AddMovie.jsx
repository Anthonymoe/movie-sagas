import { useHistory } from 'react-router-dom'

function AddMovie(){
    const history = useHistory();
    
    //brings user back to homepage/MovieList
    const cancelHandle = () => {
        history.push('/')
    }

    //adds movie to db and brings user back home 
    const saveMovie = () => {
        history.push('/')
    }
    
    
    return(
        <>
            <h1>Add a Movie</h1>
            <input type="text" placeholder="Title"/>
            <input type="text" placeholder="Image URL"/>
            <textarea placeholder="Description...." name="description" id="desc" cols="30" rows="10"></textarea>
            <select name="" id="">
                <option value="1">1</option>
                <option value="2">2</option>
            </select>
            <button onClick={saveMovie}>Save</button>
            <button onClick={cancelHandle}>Cancel</button>
        </>
    )   
}

export default AddMovie;
