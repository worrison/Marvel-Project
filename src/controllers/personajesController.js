import api from './config.js';
import axios from 'axios';


let characters = () => {
    return axios.get(api)
 } 

export default { characters }
