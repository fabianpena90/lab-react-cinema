import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

function Home () {
  async function callMyBackend (){
    // this is an example call to our backend
    let responseFromBackend = await axios.get('http://localhost:5000/');
    console.log(responseFromBackend);
  }
    return (
      <div>
        <h1>Welcome to Express Cinema</h1>
        <Link to="/movies">
        <button onClick={callMyBackend}>Check the Movies</button>
        </Link>
      </div>
    );
}

export default Home;