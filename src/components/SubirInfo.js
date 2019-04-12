import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class SubirInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            foto: '',
            nombre: '',
            correo: '',
            tipo: 'Psicólogo',
            experiencia: 5,
            bio: '',
            duracion: 1,
            direccion:'',
            cp:''
         }
    }
    onInputChange = (e)=>{
      const {id, value} = e.target;
      console.log(id, value)
      this.setState({[id]: value})
    }
    PostPersona = (e) =>{
      e.preventDefault();
      console.log(this.state)
      axios.post ('http://localhost:3001/personas', this.state)
      .then(res=>{
        if (res.status ===201){
          alert('Se han subido correctamente tus datos')
        }
      }).catch(err=>{
        alert('Hubo un error', err)
      })

    }
    render() { 
        return ( 
          <div  className="container">
          <nav className="navbar navbar-light">
              <a className="navbar-brand" href="#">HeyBuddy!   
              </a>
            </nav>
          <div className="row">
          <div className="col-6 titulo">
          <div className="row">
          <h1>Registrate como un Buddy </h1>
          </div>
          <div className="row">
          <h1>y ayuda a los que estan </h1>
          </div>
          <div className="row">
            <h1>cerca de ti.</h1>
          </div>
          </div>
          <div className= "col-5">
            <form onSubmit={this.PostPersona}>
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input onChange={this.onInputChange} type="text" className="form-control" id="nombre" placeholder="Ingresa tu nombre completo" />
              </div>
              <div className="form-group">
                <label htmlFor="correo">Correo electrónico</label>
                <input onChange={this.onInputChange}type="text" className="form-control" id="correo" placeholder="" />
              </div>
              <div className="form-group">
                <label htmlFor="foto">Sube una foto tuya</label>
                <input onChange={this.onInputChange}type="text" className="form-control" id="foto" placeholder="Pega una URL" />
              </div>
              <div class="form-group">
                <label for="tipo">Selecciona tu especialidad</label>
                <select onChange={this.onInputChange} value={this.state.tipo} class="form-control" id="tipo">
                  <option>Psicólogo</option>
                  <option>Psiquiatra</option>
                  <option>Pedagogo</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="experiencia">¿Cúantos años de experiencia tienes?</label>
                <input onChange={this.onInputChange} type="text" className="form-control" id="experiencia" placeholder="" />
              </div>
              <div className="form-group">
                <label htmlFor="bio">Cuéntanos sobre ti</label>
                <textarea onChange={this.onInputChange} type="text" className="form-control" id="bio" placeholder="Ingresa una breve biografía" />
              </div>
              <div className="form-group">
                <label htmlFor="duracion">Duración de tu consulta</label>
                <input onChange={this.onInputChange} type="text" className="form-control" id="duracion" placeholder="1 hora (estimado minimo)" />
              </div>
              <div className="form-group">
                <label htmlFor="direccion">Dirección de tu consultorio</label>
                <input onChange={this.onInputChange} type="text" className="form-control" id="direccion" placeholder="calle, numero exterior, colonia" />
              </div>
              <div className="form-group">
                <label htmlFor="cp">Código postal</label>
                <input onChange={this.onInputChange} type="text" className="form-control" id="cp" placeholder="" />
              </div>
              <div className= "boton">
              <Link to = "/" >
              <button className="btn btn-success" type="submit" >
              Continuar
              </button>
              </Link>
              </div>
            </form>
          </div>
          </div>
          </div>
         );
    }
}
 
export default SubirInfo;