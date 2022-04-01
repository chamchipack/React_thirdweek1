import './main.css'
import {getCookie, setCookie, deleteCookie} from '../cookie/cookie'

function Login(){

    console.log(getCookie('user_id'));
    const login = () =>{
        setCookie('user_id', 'perl', 3);
        setCookie('user_pwd', 'pppp',3);
    }

    return(
        <div className="register-box">
            <div className="register-inner">
                <div className="register-title">
                    <h3>로그인</h3>
                </div>
                <div className="reg-input">
                    <h4>아이디</h4>
                    <input/>
                </div>
                <div className="reg-input">
                    <h4>비밀번호</h4>
                    <input/>
                </div>
                <div className="reg-input">
                    <button onClick={()=>{console.log('로그인했다'); login()}}>로그인</button>
                </div>
            </div>
        </div>
    )
}
export default Login