import './main.css'
import {getCookie, setCookie, deleteCookie} from '../cookie/cookie'
import {useDispatch} from 'react-redux';
import {actionCreators as userActions} from '../redux/user';
import { useState } from 'react';
import Grid from '../elements/Grid';
import Input from '../elements/Input';
import styled from 'styled-components';


function Login(){
    const dispatch = useDispatch();
    const [id, setId] = useState();
    const [pwd, setPwd] = useState();

    const login = () =>{
        if(id === '' || pwd === ''){
            window.alert('공란이야')
            return;
        }
        dispatch(userActions.loginFB(id, pwd));
    }
    console.log(id)

    return(
        <GridDiv height='100%'>
            <Grid height='50%'>
                <Grid height='20%'>
                    <h3>로그인</h3>
                </Grid>
                <Grid height='20%'>
                    <h4>아이디</h4>
                    <Input width='300px' height='40px' _onChange={(e)=>{setId(e.target.value)}}/>
                </Grid>
                <Grid height='20%'>
                    <h4>비밀번호</h4>
                    <Input width='300px' height='40px' _onChange={(e)=>{setPwd(e.target.value)}}/>
                </Grid>
                <Grid marginTop='30px' height='20%'>
                    <button onClick={()=>{login()}}>로그인</button>
                </Grid>
                
            </Grid>
        </GridDiv>
    )
}
export const GridDiv = styled.div`
    margin-top : 50px;
`

export default Login