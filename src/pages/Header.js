import './main.css'
import {Link} from 'react-router-dom'
import {FaHome} from 'react-icons/fa';
import { useEffect, useState } from 'react';
import {getCookie, deleteCookie} from '../cookie/cookie';
import {useSelector, useDispatch} from 'react-redux';
import {actionCreators as userActions} from '../redux/user';
import {history} from '../redux/store';
import { apiKey } from '../firebase';

function Header(){
    const dispatch = useDispatch();
    const is_login = useSelector((state) => state.user.is_login);
    const session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
    const is_session = sessionStorage.getItem(session_key)? true : false;
    console.log(is_session);
    console.log(is_login)
    // const [isLogin, setIsLogin] = useState(false);
    // useEffect(()=>{
    //     let cookie = getCookie('user_id');
    //     console.log(cookie)
    //     if(cookie){
    //         setIsLogin(true);
    //     } else {
    //         setIsLogin(false)
    //     }
    // });

    if(is_login && is_session){
        return(
            <div className='head-background'>
                <div className='head-ground'>
                    <div className='head-inner-box'>
                        <div className='head-content'>
                            <Link to='/main'><FaHome className='FaHome' /></Link>
                            <Link to='/register'><div className='clicked-btn'><p>내정보</p></div></Link>
                            <Link to='/login'><div onClick={()=>{dispatch(userActions.logoutFB());}} className='clicked-btn'><p>로그아웃</p></div></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className='head-background'>
            <div className='head-ground'>
                <div className='head-inner-box'>
                    <div className='head-content'>
                        <Link to='/main'><FaHome onClick={()=>{history.push('/main')}} className='FaHome' /></Link>
                        <Link to='/register'><div onClick={()=>{history.push('/register')}} className='clicked-btn'><p>회원가입</p></div></Link>
                        <Link to='/login'><div onClick={()=>{history.push('/login')}} className='clicked-btn'><p>로그인</p></div></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header