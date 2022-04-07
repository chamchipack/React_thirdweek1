import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modalcomment from './Modalcomment';
import { getCommentFB } from '../redux/comment';

function Post(props){
    const dispatch = useDispatch();
    let post = props.post_list
    let idx = props.idx
    let comment = props.comment;
    let com;
    const [getModal, setModal] = useState(false);
    const comment_list = useSelector(state => state.post.list)
   
    
    // useEffect dispatch 하나씩? 
    return(
        <>
        {
            getModal == true 
            ? <Modalcomment post_id={comment_list[idx]} getModal={getModal} setModal={setModal} />
            : null
        }
        <div className="post-content post-left">
            <img className="post-image" src={post[idx].url}></img>
        </div>
        <div className="post-content post-right">
            <div className="post-box">
                <div className="post-profile">
                    <div className="post-float"><img src={post[idx].user_profile}></img></div>
                    <div className="post-float"><h2>{post[idx].nick}</h2></div>
                    <div className="post-float dt"><h5>{post[idx].insert_dt}</h5></div>
                </div>
                <div>
                    <p>{post[idx].contents}</p>
                </div>
            </div>
            <button onClick={()=>setModal(!getModal)} className="comment_modal-btn">댓글보기</button>
        </div>
        </>
    )
}
export default Post