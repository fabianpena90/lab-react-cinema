import React, { Component } from 'react';
import Home from './components/Home';
import { Switch, Route } from "react-router-dom";
import Movies from "./components/Movies";
import MovieDetails from "./components/MovieDetails";

function App (){
    return (
      <div className='App'>
      <Switch>
        <Route exact path='/' render={() => <Home/>} />
        <Route exact path='/movies' render={() => <Movies/>} />
        <Route exact path='/movies/:id' render={(props) => <MovieDetails {...props}/>} />'
      </Switch>
      </div>
    );
}

export default App;
