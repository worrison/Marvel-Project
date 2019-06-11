import React, { Component } from 'react';
import Comic from './comic';
import listComics from '../controllers/comicsController'

class Comics extends Component {

    constructor(props) {
        super(props);

        this.state = {
            comics: []
        }
        
        listComics.comics()
            .then(res => {
                const comics = res.data.data.results;
                console.log("hola",comics)
                this.setState({comics});
            })
    }
   
    render() {

        return (<div>
                 {this.state.comics.map((item, i) => <Comic key={i} {...item}></Comic>)}  
                </div>)
    }

}


export default Comics;