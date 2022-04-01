import './main.css'
import {Link} from 'react-router-dom'
import {FaHome} from 'react-icons/fa';
import { useEffect, useState } from 'react';
import {getCookie, deleteCookie} from '../cookie/cookie';

function Header(){
    const [isLogin, setIsLogin] = useState(false);
    useEffect(()=>{
        let cookie = getCookie('user_id');
        console.log(cookie)
        if(cookie){
            setIsLogin(true);
        } else {
            setIsLogin(false)
        }
    });

    if(isLogin == true){
        return(
            <div className='head-background'>
                <div className='head-ground'>
                    <div className='head-inner-box'>
                        <div className='head-content'>
                            <Link to='/main'><FaHome className='FaHome' /></Link>
                            <Link to='/register'><div className='clicked-btn'><p>내정보</p></div></Link>
                            <Link to='/login'><div onClick={()=>{deleteCookie('user_id');}} className='clicked-btn'><p>로그아웃</p></div></Link>
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
                        <Link to='/main'><FaHome className='FaHome' /></Link>
                        <Link to='/register'><div className='clicked-btn'><p>회원가입</p></div></Link>
                        <Link to='/login'><div className='clicked-btn'><p>로그인</p></div></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header