import React, {useEffect, useState} from 'react';
import axios from 'axios'

function MovieDetails(props) {
  const [details, setDetails] = useState([])

useEffect(() => {
  async function movieDetails() {
    let res = await axios.get(`http://localhost:5000/movies/${props.match.params.id}`);
    console.log(res.data)
    setDetails(res.data.eachMovie)
  }
  movieDetails()
}, [])
  return (
    <div>
    <img src={details.image} alt="movie poster" />
      <p>{details.title}</p>
      <p>{details.director}</p>
      <p>{details.stars}</p>
      <p>{details.description}</p>
      <p>{details.showtimes}</p>
    </div>
  );
}

export default MovieDetails;