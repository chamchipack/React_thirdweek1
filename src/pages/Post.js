import React from "react";

function Post(props){
    let post = props.post_list
    return(
        <>
        <h3>제목</h3>
        <div>{post}</div>
        </>
    )
}
export default Post