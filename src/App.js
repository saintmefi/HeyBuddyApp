import React, { Component } from 'react';
import './App.css';
import SubirInfo from './components/SubirInfo.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Buscar from './components/Buscar';

// import 'bootstrap/dist/js/bootstrap.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Route exact path = "/" component = {Buscar}/>
      <Route exact path = "/subir-info" component = {SubirInfo}/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
