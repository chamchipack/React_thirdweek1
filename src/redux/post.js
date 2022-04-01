import {createAction, handleActions} from 'redux-actions';
import {produce} from 'immer';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../firebase';

const SET_POST = 'SET_POST';
const ADD_POST = 'ADD_POST';

const setPost = createAction(SET_POST, (post_list) => ({post_list}));
const addPost = createAction(ADD_POST, (post) => ({post}));


const initialState = {
    list : [],
};
const initilaPost = {
    // 3-2 7분
};
export function loadWidgets(dictionary) {
    return { type: SET_POST, dictionary };
}

export const getPostFB = () => {
    return function (dispatch){
        const postdb = firestore.collection('post')
    }
}


export default handleActions(
    {
        [SET_POST]:(state, action) => produce(state, (draft)=>{

        }),
        [ADD_POST]:(state, action) => produce(state, (draft)=>{

        })
    }, initialState);

const actionCreators = {
    setPost,
    addPost,
    getPostFB,

};
    
export {actionCreators}
