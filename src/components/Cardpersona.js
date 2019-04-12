import React, { Component } from 'react';


class Cardpersona extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="card mt-5 mr-3" style={{maxWidth: 300}} >
        <img src={this.props.personas.foto?this.props.personas.foto:'https://i.gifer.com/8c4Z.gif'} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{this.props.personas.nombre}</h5>
            <h6 className="card-title">{this.props.personas.tipo}</h6>
            <p className="card-text">
                <strong>Biografia:</strong> {this.props.personas.bio}
            </p>
            <p className="card-text">
                Experiencia: {this.props.personas.experiencia} años 
            </p>
            <p className="card-text">
                Dirección: {this.props.personas.direccion} 
            </p>
        </div>
    </div> );
       
    }
}
 
export default Cardpersona;