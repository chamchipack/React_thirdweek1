import {collection, doc, getDocs, addDoc, updateDoc, deleteDoc} from 'firebase/firestore';
import {db} from '../firebase';

import firebase from "firebase/compat/app"; 
import "firebase/compat/auth"; 
import "firebase/compat/firestore";

const LOAD = 'LOAD_COMMENT';

const initialState = {
    list : [],
};

export function loadComment(comment) {
    return { type: LOAD, comment };
}

export const getCommentFB = (post_id) => {
    return async function (dispatch, getState){
        console.log(post_id)
        const comment_data = await getDocs(collection(db, 'comment'))
        let comment_list = [];
        comment_data.forEach((e)=>{
            comment_list.push({...e.data(), id : e.id})
        })
    }
}

export const addCommentFB = (content, postId) => {
    return async function (dispatch){
        const uploadComment = {
            content : content,
            post_id : postId
        }

        await addDoc(collection(db,'comment'),uploadComment)
    }
}

export default function reducer(state = initialState, action = {}) { // state = {} : 디폴트값
    switch (action.type) {
        case "LOAD_COMMENT" : {
            return {
                list : action.comment
            }
        }
        
        default: return state;
    }
}