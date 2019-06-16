import React, {Component} from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import ComicsInCharacter from './comicsInCharacter'
const API="https://gateway.marvel.com:443/v1/public/characters/";
const API2="?apikey=26d7528942f2d504c462e42835bd7313"

class DetailCharacter extends Component{
    constructor(props){
        super(props);
        this.state = {
            character: null
        }


        this.characterId = props.match.params.id;
        Axios.get(API  + this.characterId + API2).then((res) => {
            let  character = res.data.data.results[0];
            this.setState({
                character
            })
        })
    }

    render(){

        if(this.state.character){
            return <div>
                <Link to="/">Go home</Link>
                <h1>{this.state.character.name}</h1>
                <h1>{this.state.character.id}</h1>
                {console.log("Hola",this.state.character.id)}
                <img src={this.state.character.thumbnail.path +"."+ this.state.character.thumbnail.extension} alt={this.state.character.name}/>
                <ComicsInCharacter idPersonaje={this.state.character.id}></ComicsInCharacter>
            </div>
        }else{
            return <div>
                <h2>Cargando personaje...</h2>
            </div>
        }
    }
}


export default DetailCharacter;