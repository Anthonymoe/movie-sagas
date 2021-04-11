import {HashRouter as Router, Route} from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieDetails from '../MovieDetails/MovieDetails';


function App() {
  const [details, setDetails] = useState({});

  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList setDetails={setDetails} />
        </Route>
        {/* Details page */}
        <Route path="/details">
            <MovieDetails details={details} />
        </Route>
        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
