import React, {useEffect, useState} from 'react';
import axios from 'axios';

function AddMovie(props) {

const [addMovie, setAddMovie] = useState([])

function handleChange(e){
  setAddMovie(e.target.value)
}

async function handleSubmit(e) {
    await axios.post(`http://localhost:5000/addMovie`, addMovie);
    // console.log(res.data)
}

  return (
    <div style={{ padding: '80px'}}>
      <form onSubmit={handleSubmit} method="post">
        <input onChange={handleChange} type="text" name="title"/>
        <input onChange={handleChange} type="text" name="director"/>
        <button>Add New Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;