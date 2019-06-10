import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Personajes from './components/personajes';
import Detail from './components/detail';
import { BrowserRouter, Route, Switch } from "react-router-dom";


const routes = ( <BrowserRouter >
    <div >
        <Switch >
            <Route path = "/" component = { Personajes } exact/> 
            {/* <Route path="/detalle/:id" component={Detalle} /> */}
            <Route path="/detalle/:id" component={ Detail } exact/>

        </Switch>
     </div> 
        </BrowserRouter>
);


ReactDOM.render(routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
