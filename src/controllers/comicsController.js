// import api from './config.js';
import axios from 'axios';
const API='https://gateway.marvel.com/v1/public/comics?apikey=26d7528942f2d504c462e42835bd7313';
let comics = () => {
    return axios.get(API)
 } 
console.log(comics)
export default { comics }