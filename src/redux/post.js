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

export function uploadImage(image){
    return {type : UPLOAD, image}
}

export function loadPost(image){
    return {type : UPLOAD, image}
}


export const getPostFB = () => { // 포스팅 전체 가져오기
    return async function (dispatch, getState){
        const post_data = await getDocs(collection(db, 'post')) // db에서 전체 데이터 가져오기
        let post_list = []; 
        post_data.forEach((e, i)=>{
            post_list.push({...e.data(), id : e.id}) // 새로운 배열을 만들어 데이터를 담아준다.
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
        // 이상 오늘의 날짜를 가져오는 내장함수 Date를 이용
        let info = getState();  // getState : 스토어에 
        const uploadPost = {    // 추가된 포스트를 한번에 보여줌
            user_id: info.user.user.uid,
            nick: info.user.user.nick,
            user_profile: 'https://e7.pngegg.com/pngimages/764/590/png-clipart-emoji-emoticon-smiley-heart-shaped-light-head-smiley.png',
            url: file,
            contents: text,
            comment_cnt: 0,
            insert_dt: dateString,
        }
        await addDoc(collection(db,'post'),uploadPost) // db에 그대로 넣기
        history.push('/');
    }
}
// uid, nick, content, insert_dt, 
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