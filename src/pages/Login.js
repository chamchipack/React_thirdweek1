import './main.css'
import {getCookie, setCookie, deleteCookie} from '../cookie/cookie'
import {useDispatch} from 'react-redux';
import {actionCreators as userActions} from '../redux/user';
import { useState } from 'react';


function Login(){
    const dispatch = useDispatch();
    const [id, setId] = useState();
    const [pwd, setPwd] = useState();

    console.log(getCookie('user_id'));
    const login = () =>{
        if(id === '' || pwd === ''){
            window.alert('공란이야')
            return;
        }
        dispatch(userActions.loginFB(id, pwd));
    }

    return(
        <div className="register-box">
            <div className="register-inner">
                <div className="register-title">
                    <h3>로그인</h3>
                </div>
                <div className="reg-input">
                    <h4>아이디</h4>
                    <input onChange={(e)=>{setId(e.target.value)}}/>
                </div>
                <div className="reg-input">
                    <h4>비밀번호</h4>
                    <input onChange={(e)=>{setPwd(e.target.value)}}/>
                </div>
                <div className="reg-input">
                    <button onClick={()=>{login()}}>로그인</button>
                </div>
            </div>
        </div>
    )
}
export default Login