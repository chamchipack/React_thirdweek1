import React from "react";

function Post(props){
    let post = props.post_list
    let idx = props.idx
    return(
        <>
        <div className="post-content"><img className="post-image" src={post[idx].url}></img></div>
        <div className="post-content">
            <div>
                <h5>{post[idx].id}</h5>
                <p>{post[idx].content}</p>
            </div>
        </div>
        </>
    )
}
export default Post