import {createAction, handleActions} from 'redux-actions';
import {produce} from 'immer';

import {setCookie, getCookie, deleteCookie} from '../cookie/cookie';
import {auth} from '../firebase';
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, browserSessionPersistence, setPersistence, signOut } from "firebase/auth";

//actions
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const GET_USER = 'GET_USER';
const SET_USER = 'SET_USER';

// action creators
const logIn = createAction(LOGIN, (user)=>({user}));
const logOut = createAction(LOGOUT, (user)=>({user}));
const getUser = createAction(GET_USER, (user)=>({user}));
const setUser = createAction(SET_USER, (user)=>({user}));

// initialState
const initialState = {
    user : null,
    is_login : false,
}
const user_initial = {
    user_name : 'mean0',
}

// middleware action
// const loginAction = (user) => {
//     return function (dispatch, getState, {history}){
//         console.log(history);
//         dispatch(setUser(user));
//         history.push('/main');
//     }
// };

const signupFB = (id, pwd, nick) =>{
    return function(dispatch, getState, {history}){
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, id, pwd)
            .then((userCredential) => {
                // Signed in
                console.log(userCredential)
                const user = userCredential.user;
                updateProfile(auth.currentUser, {
                    displayName : nick,
                }).then(()=>{
                    console.log('가입성공')
                    dispatch(setUser({nick : nick, id : id, uid: user.uid}));
                    // history.push('/main');
                }).catch((error)=>{
                    console.log(error)
                })
                // ...
            })
            .catch((error) => {
                console.log('응~ 에러야')
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                // ..
            });
    }
}

const loginFB = (id, pwd) => {
    return function(dispatch, getState, {history}){
        const auth = getAuth();
        setPersistence(auth, browserSessionPersistence)
        .then((res)=>{
            signInWithEmailAndPassword(auth, id, pwd)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log('로그인 성공')
                console.log(user)
                dispatch(setUser({nick : user.displayName, id : id, uid : user.uid}))
                //dispatch(setUser({id : id, }))
                history.push('/')
            })
            .catch((error) => {
                console.log('로그인 안대쓰')
                const errorCode = error.code;
                const errorMessage = error.message;
            });
        })
        .catch((error) => {
            console.log(error)
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
          });
    }
}

const loginCheckFB = () => {
    return function(dispatch, getState, {history}){
        const auth = getAuth();
        onAuthStateChanged(auth, (user)=>{
            if(user){
                dispatch(setUser({
                    nick : user.displayName,
                    id : user.email,
                    uid : user.uid
                }))
            } else {
                dispatch(logOut());
            }
        })
    }
}

const logoutFB = () => {
    return function(dispatch, getState, {history}){
        const auth = getAuth();
        signOut(auth).then(()=>{
            dispatch(logOut());
            history.replace('/main')
        })
    }
}

//reducer
export default handleActions({
    [LOGIN] : (state, action) => produce(state, (draft)=>{
        setCookie('is_login', 'success');
        draft.user = action.payload.user;
        draft.is_login = true;
    }),
    [LOGOUT] : (state, action) => produce(state, (draft)=>{
        deleteCookie('is_login');
        draft.user = null;
        draft.is_login = false;
    }),
    [GET_USER] : (state, action) => produce(state, (draft)=>{}),
    [SET_USER] : (state, action) => produce(state, (draft)=>{
        setCookie('is_login', 'success');
        draft.user = action.payload.user;
        draft.is_login = true;
    }),

}, initialState);

// export
const actionCreators = {
    logIn,
    logOut,
    getUser,
    // loginAction,
    signupFB,
    loginFB,
    loginCheckFB,
    logoutFB,
};

export {actionCreators}