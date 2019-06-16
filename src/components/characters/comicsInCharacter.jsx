import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
const API="https://gateway.marvel.com:443/v1/public/characters/";
const API2="/comics?apikey=26d7528942f2d504c462e42835bd7313"

class ComicsInCharacter extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            comics:[]
        }
        let apiComics=API + props.idPersonaje +API2
       
        axios.get(apiComics).then((res) => {
            let  comics = res.data.data.results;
            
            this.setState({
                comics
            }) 
            console.log("comics",this.state.comics);
        })
        
    }
    
    render(){
        return <div>
            
                {this.state.comics.map((item, i) => <div key={i}><Link to={"/detalleComic/" + item.id}> {item.title}</Link> </div>)}
        </div>
    }

}

export default ComicsInCharacter