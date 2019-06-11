import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Personajes from './components/personajes';
import Comics from './components/comics';
import DetailCharacter from './components/detailCharacter';
import DetailComic from './components/detailComic';
import { BrowserRouter, Route, Switch } from "react-router-dom";


const routes = ( <BrowserRouter >
    <div >
        <Switch >
            <Route path = "/" component = { Personajes } exact/> 
            {/* <Route path="/detalle/:id" component={Detalle} /> */}
            <Route path="/detalleCharacter/:id" component={ DetailCharacter } exact/>
            <Route path="/comics/" component={ Comics } exact/>
            <Route path="/detalleComic/:id" component={ DetailComic } exact/>

        </Switch>
     </div> 
        </BrowserRouter>
);


ReactDOM.render(routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
