import React, { Component } from 'react';
import Cardpersona from './Cardpersona.js';
import axios from 'axios';

class Persona extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            personas: []
         }
    }
    componentDidMount(){
        axios.get('http://localhost:3001/personas')
        .then(response=>{
            console.log('Get', response);
            this.setState({personas:response.data});
        }).catch(err=>{
            console.log('error: ', err);
        })
    }
    render() { 
        return ( 
            <div className= "container">
            <div className = "row">
            {
                this.state.personas.length > 0
                ?
                this.state.personas.map(perso=>{
                    return (
                        <div className="col-12 col-sm-6 col-md-3">
                            <Cardpersona personas={perso}/>
                        </div>
                    )
                })
                : <p>Cargando...</p>
            }

            </div>
            </div>
           

         );
    }
}
 
export default Persona;