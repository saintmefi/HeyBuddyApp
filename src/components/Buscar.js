import React, { Component } from 'react';
import Cardpersona from './Cardpersona';
import Persona from './Persona';

class Buscar extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="Buscar">
        <nav className="navbar navbar-light">
          <a className="navbar-brand" href="#">HeyBuddy!
              </a>
        </nav>
        <div className= "container">
        <div className= "row">
        <div className= "col-sm">
        <div className = "Input">
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Ingresa busqueda" aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <div className="input-group-append">
              <button className="btn btn-success" type="button" id="button-addon2">Buscar</button>
            </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div className= "Titulo">
        <h2>Buddy's registrados</h2>
        </div>
        <Persona/>
      </div>
    );
     }
 }
  
export default Buscar;