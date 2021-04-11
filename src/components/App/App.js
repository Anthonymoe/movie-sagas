import {HashRouter as Router, Route} from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieDetails from '../MovieDetails/MovieDetails';
import AddMovie from '../AddMovie/AddMovie'


function App() {
  const [details, setDetails] = useState({});

  return (
    <div className="App">
      <Router>        
        <Route path="/" exact>
          <MovieList setDetails={setDetails} />
        </Route>
        <Route path="/details">
            <MovieDetails details={details} />
        </Route>
        <Route path="/AddMovie">
            <AddMovie />
        </Route>
      </Router>
    </div>
  );
}


export default App;
