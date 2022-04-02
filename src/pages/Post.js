import React from "react";

function Post(props){
    let post = props.post_list
    let idx = props.idx
    return(
        <>
        <div className="post-content post-left">
            <img className="post-image" src={post[idx].url}></img>
        </div>
        <div className="post-content post-right">
            <div className="post-box">
                <div className="post-profile">
                    <div className="post-float"><img src={post[idx].profile}></img></div>
                    <div className="post-float"><h2>{post[idx].nick}</h2></div>
                    <div className="post-float dt"><h5>{post[idx].insert_dt}</h5></div>
                </div>
                <div>
                    <p>{post[idx].contents}</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default Post