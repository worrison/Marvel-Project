import React, { Component } from 'react';
import Personaje from './personaje';
import listPersonajes from '../controllers/personajesController'

class Personajes extends Component {

    constructor(props) {
        super(props);

        this.state = {
            personajes: []
        }

        listPersonajes.characters()
            .then(res => {
                const personajes = res.data.data.results;
                console.log(personajes)
                this.setState({personajes});
                console.log({personajes})
                console.log(this.state.personajes.thumbnail.path)
            })
    }
   
    render() {

        return (<div>
                 {this.state.personajes.map((item, i) => <Personaje key={i} {...item}></Personaje>)}  
                </div>)
    }

}


export default Personajes;