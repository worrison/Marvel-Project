import store from '../store';
import loadAllComics from '../controllers/comicsController';

let allComics=loadAllComics.comics;
let index = 0;

function listComics(allComics) {
    let myAction = {
        type: 'LIST_COMICS',
        img: allcomics.thumbnail.path + allcomics.thumbnail.extension,
        id: allcomics.id
    };
    store.dispatch(myAction)
}

/*function listComicsId(allcomics) {
    let myAction = {
        type: 'LIST_COMICS_ID',
        img: allcomics.thumbnail.path + allcomics.thumbnail.extension,
        id: allcomics.id
    };
    store.dispatch(myAction)
}*/


export default {
    listComics}
    // listComicsId