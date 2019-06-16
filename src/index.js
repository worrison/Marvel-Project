import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Personajes from './components/characters/personajes';
import Comics from './components/comics/comics';
import DetailCharacter from './components/characters/detailCharacter';
import DetailComic from './components/comics/detailComic';
import { BrowserRouter, Route, Switch, Link ,NavLink} from "react-router-dom";


const routes = ( <BrowserRouter >
    <div >
        
            <NavLink><Link to="/" activeClassName="current">Home</Link></NavLink>
            <NavLink><Link to="/comics/" activeClassName="current">Comics</Link></NavLink>
        
        
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
