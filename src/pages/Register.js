import { useState } from 'react';
import {useDispatch} from 'react-redux';
import {actionCreators as userActions} from '../redux/user';
import Input from '../elements/Input'

function Register(){
    const dispatch = useDispatch();
    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');
    const [pwd_Check, setPwd_Check] = useState('');
    const [nick, setNick] = useState('');

    const signup = () => {
        if (pwd !== pwd_Check){
            return;
        }
        if (id === '' || pwd === '' || nick === ''){
            return;
        }
        dispatch(userActions.signupFB(id, pwd, nick))
    }
    console.log({id, pwd, nick})

    return(
        <div className="register-box">
            <div className="register-inner">
                <div className="register-title">
                    <h3>회원가입</h3>
                </div>
                <div className="reg-input">
                    <h4>아이디</h4>
                    <Input width='300px' height='40px' _onChange={(e)=>{setId(e.target.value)}}/>
                </div>
                <div className="reg-input">
                    <h4>닉네임</h4>
                    <Input width='300px' height='40px' _onChange={(e)=>{setNick(e.target.value)}}/>
                </div>
                <div className="reg-input">
                    <h4>비밀번호</h4>
                    <Input width='300px' height='40px' _onChange={(e)=>{setPwd(e.target.value)}}/>
                </div>
                <div className="reg-input">
                    <h4>비밀번호확인</h4>
                    <Input width='300px' height='40px' _onChange={(e)=>{setPwd_Check(e.target.value)}}/>
                </div>
                <div className="reg-input">
                    <button onClick={()=>{signup()}}>저장하기</button>
                </div>
            </div>
        </div>
    )
}
export default Register