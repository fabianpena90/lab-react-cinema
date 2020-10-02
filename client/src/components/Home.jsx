import React, {useState} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

function Home () {

    return (
      <div>
        <h1>Welcome to Express Cinema</h1>
        <Link to="/movies">
        <button >Check the Movies</button>
        </Link>
        <Link to="/addMovie">
          <button>Add New Movie</button>
        </Link>
      </div>
    );
}

export default Home;