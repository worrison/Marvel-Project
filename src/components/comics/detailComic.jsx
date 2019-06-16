import React, {Component} from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import CharactersInComic from './chataracterInComic'
const API="https://gateway.marvel.com:443/v1/public/comics/";
const API2="?apikey=26d7528942f2d504c462e42835bd7313"

class DetailComic extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            comic: null,
            ApiPersonajes:"",
            personajes:[]
        }

        this.comicId = props.match.params.id;
        Axios.get(API  + this.comicId + API2).then((res) => {
            let  comic = res.data.data.results[0];
            console.log(comic);
            let ApiPersonajes=res.data.data.results[0].characters.collectionURI
            ApiPersonajes=ApiPersonajes + API2;

            this.setState({
                comic,
                ApiPersonajes
            }) 

        })
        
        
        
    //     let personajes= async () =>{
    //         let all=await Axios.get(this.state.ApiPersonajes);
    //         return all.data.results
    //    }
    //    this.setState({
    //        personajes
    //     })
        // console.log(personajes);
        
        
            // await Axios.get(this.state.ApiPersonajes).then((res) => {
            //     let  personajes = res;
            //     console.log("los personajes",personajes)
            //     this.setState({
            //         personajes
            //     })
            // })
    }

    render(){

        if(this.state.comic){
            return <div>
                <Link to="/">Go home</Link>
                <p>{this.state.ApiPersonajes}</p>
                <p>{this.state.personajes}</p>
                <h1>{this.state.comic.name}</h1>
                <h1>{this.state.comic.id}</h1>
                <img src={this.state.comic.thumbnail.path +"."+ this.state.comic.thumbnail.extension} alt=""/>
                <CharactersInComic ApiPersonajes={this.state.ApiPersonajes}></CharactersInComic>
            </div>
        }else{
            return <div>
                <h2>Cargando comic...</h2>
            </div>
        }
    }
}


export default DetailComic;