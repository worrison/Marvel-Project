import React, {Component} from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
const API="https://gateway.marvel.com:443/v1/public/comics/";
const API2="?apikey=26d7528942f2d504c462e42835bd7313"

class DetailComic extends Component{
    constructor(props){
        super(props);
        this.state = {
            comic: null
        }


        this.comicId = props.match.params.id;
        Axios.get(API  + this.comicId + API2).then((res) => {
            let  comic = res.data.data.results[0];
            this.setState({
                comic
            })
        })
    }

    render(){

        if(this.state.comic){
            return <div>
                <Link to="/">Go home</Link>
                <h1>{this.state.comic.name}</h1>
                <h1>{this.state.comic.id}</h1>
                {console.log("Hola",this.state.comic.id)}
                <img src={this.state.comic.thumbnail.path +"."+ this.state.comic.thumbnail.extension} alt=""/>
            </div>
        }else{
            return <div>
                <h2>Cargando comic...</h2>
            </div>
        }
    }
}


export default DetailComic;