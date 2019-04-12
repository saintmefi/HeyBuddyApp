import React, { Component } from 'react';
import Cardpersona from './Cardpersona';
import Persona from './Persona';
import axios from 'axios'

class Buscar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultados: [], 
      query: '',
      ejecuto: false
    }
  }

  filtrar = (e) => {
    const { id, value } = e.target;
    console.log(id, value);
      this.setState()
    this.setState({ [id]: value })
  }

  buscar = (event) => {
    event.preventDefault();
    this.setState({ejecuto: true})
    axios.get('https://heybuddydevf.herokuapp.com/buscar?tipo=' + this.state.query)
      .then(res => {
        console.log(res.data)
        this.setState({ resultados: res.data });
      }).catch(err => {
        console.log('Hubo un error', err)
      })
  }

  renderizarResultados = () => {
    if (this.state.resultados.length > 0) {
      return (
        this.state.resultados.map(r => {
          return (
            <div className="col-12 col-sm-6 col-md-3">
              <Cardpersona personas={r} />
            </div>
          )
        })
      )
    } else {
      return (
        <div>
          {
            (this.state.query.length > 0 && this.state.ejecuto)
            ? <p>Sin resultados</p>
            : <Persona />
          }
        </div>
      )
    }
  }

  render() {
    return (
      <div className="Buscar">
        <nav className="navbar navbar-light">
          <a className="navbar-brand" href="#">HeyBuddy!
              </a>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-sm">
             <form onSubmit={this.buscar}>
              <div className="Input">
                <div className="input-group mb-3">
                    <input onChange={this.filtrar} type="text" id="query" className="form-control" placeholder="Ingresa busqueda" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <div className="input-group-append">
                      <button className="btn btn-success" type="submit" id="button-addon2">Buscar</button>
                    </div>
                </div>
               </div>
             </form>
            </div>
          </div>
        </div>
        <div className="Titulo">
          <h2>Buddy's registrados</h2>
        </div>
        <div className="container">
          <div className="row">
            {this.renderizarResultados()}
          </div>
        </div>
      </div>
    );
  }
}

export default Buscar;