import {createAction, handleActions} from 'redux-actions';
import {produce} from 'immer';
import {collection, doc, getDocs, addDoc, updateDoc, deleteDoc} from 'firebase/firestore';
import {db} from '../firebase';
import moment from 'moment';

const LOAD = 'LOAD_POST';
const ADD_POST = 'ADD_POST';
const UPLOAD = 'UPLOAD'

// const setPost = createAction(SET_POST, (post_list) => ({post_list}));
// const addPost = createAction(ADD_POST, (post) => ({post}));


const initialState = {
    list : [],
};
const initilaPost = {
    id : 'id',
    user_id : 'user_id',
    nick : 'user_nick',
    user_profile : 'www',
    url : '...',
    contents : 'dd',
    comment_cnt : 0,
    insert_dt : 'ds'
};
export function loadPost(post) {
    return { type: LOAD, post };
}
export function uploadImage(image){
    return { type : UPLOAD, image}
}

export const getPostFB = () => {
    return async function (dispatch, getState){
        const post_data = await getDocs(collection(db, 'post'))
        let post_list = [];
        post_data.forEach((e)=>{
            post_list.push({...e.data()})
            console.log(e.data(), e.id)
        })
        dispatch(loadPost(post_list))
    }
}

export const addPostFB = (file, text) => {
    return async function(dispatch, getState, {history}){
        let today = new Date();
        let year = today.getFullYear();
        let month = ('0' + (today.getMonth() + 1)).slice(-2);
        let day = ('0' + today.getDate()).slice(-2);
        let dateString = year + '-' + month + '-' + day;

        console.log(dateString)
        console.log({file, text})
        let info = getState();
        const uploadPost = {
            user_id: info.user.user.uid,
            nick: info.user.user.nick,
            user_profile: 'https://e7.pngegg.com/pngimages/764/590/png-clipart-emoji-emoticon-smiley-heart-shaped-light-head-smiley.png',
            url: file,
            contents: text,
            comment_cnt: 0,
            insert_dt: dateString,
        }
        console.log(uploadPost)
        await addDoc(collection(db,'post'),uploadPost)
        history.push('/');
    }
}

export default function reducer(state = initialState, action = {}) { // state = {} : 디폴트값
    switch (action.type) {
        case "LOAD_POST" : {
            return {
                list : action.post
            }
        }
        case "UPLOAD" : {
            return {
                list : action.image
            }
        }
        default: return state;
    }
}