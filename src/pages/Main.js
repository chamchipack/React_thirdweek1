import react, { useEffect } from 'react';
import './main.css'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import {apiKey} from '../firebase';
import Post from './Post'
import { getPostFB } from '../redux/post'

function Main(){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPostFB())
    },[])
    const session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
    const is_session = sessionStorage.getItem(session_key)? true : false;

    const is_login = useSelector((state) => state.user.is_login);
    const post_list = useSelector((state) => state.post.list);
    console.log(post_list)
    
    let btn_component;
    if(is_login && is_session){
        btn_component = <Link to='/add-content'><div className='add-circle'></div></Link>
    }
    return(
        <>
            <div className='content-ground'>
                <div className='content-box'>
                    <div className="post-background">
                        <div className="post-inner">
                            {
                                post_list.map((e,idx) =>{
                                    console.log(e)
                                    return(
                                        <Post post_list={post_list} idx={idx}></Post>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            
            {btn_component}
        </>
    )
}
export default Main