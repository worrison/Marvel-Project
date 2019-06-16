import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class CharactersInComic extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            personajes:[]
        }

        axios.get(props.ApiPersonajes).then((res) => {
            let  personajes = res.data.data.results;
            console.log("personajes",personajes);
            this.setState({
                personajes
            }) 
           
        })
    }
    
    render(){
        return <div>
            
                {this.state.personajes.map((item, i) => <div key={i}><Link to={"/detalleCharacter/" + item.id}> {item.name}</Link> </div>)}
        </div>
    }

}

export default CharactersInComic