import React, {useEffect, useState} from 'react';
import axios from 'axios';

function AddMovie(props) {

const [title, setTitle] = useState('')
const [director, setDirector] = useState('')
const [image, setImage] = useState('')

async function handleSubmit(e) {
  console.log(title, director)
  e.preventDefault();
    let res = await axios.post(`http://localhost:5000/addMovie`, {title, director, image})
      console.log(res)
}

  return (
    <div style={{ padding: '80px'}}>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setTitle (e.target.value)} type="text" name="title"/>
        <input onChange={(e) => setDirector (e.target.value)} type="text" name="director"/>
        <input onChange={(e) => setImage (e.target.value)} type="text" name="image"/>
        <button>Add New Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;