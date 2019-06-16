import store from '../store';

let index = 0;

export function listComics(text) {
    let myAction = {
        type: 'LIST_COMICS',
        text,
        img,
        id: index++
    };
    store.dispatch(myAction)
}