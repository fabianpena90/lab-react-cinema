import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

function Movies(props) {
const [movies, setMovie] = useState([])

useEffect(() => {
  async function loadMovie() {
    let res = await axios.get('http://localhost:5000/movies');
    console.log(res.data.movies)
    setMovie(res.data.movies)
  }
  loadMovie()
}, [])

function displayMovie(){
  return movies.map((eachMovie) => {
    return (
      <div style={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap'}}>
      <div >
         <img src={eachMovie.image} alt="movie poster" />
         <h4>{eachMovie.title}</h4>
         <Link to={`/movies/${eachMovie._id}`}>See More</Link>
      </div>
      </div>
    )
  })
}


  return (
    <div>
      <h1>Welcome to Movies!</h1>
      {displayMovie()}
    </div>
  );
}

export default Movies;  