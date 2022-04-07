import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCommentFB, getCommentFB } from '../redux/comment';
import './main.css'

function Modalcomment(props){
    let [getText, setText] = useState();
    const dispatch = useDispatch();
    let getModal = props.getModal;
    let setModal = props.setModal;
    const post_id = props.post_id
    const text = useRef();
    const comment = useSelector(state => state.comment.list)
    console.log(comment)

    const onChange = () => {
        setText(text.current.value)
    }
    const addComment = () => {
        dispatch(addCommentFB(getText, post_id.id))
    }

    useEffect(()=>{
        dispatch(getCommentFB(post_id.id))
    },[])
    
    return(
        <div className="black-modal" >
            <div className="white-modal">
                <button className='close-btn' onClick={()=>setModal(!getModal)}>X</button>
                <div className='comment-box'>
                    {
                        comment.map(e=>{
                            console.log(e)
                            return(
                                <p>{e.content}</p>
                            )
                        })
                    }
                </div>
                <div>
                    <textarea onChange={onChange} ref={text}></textarea>
                    <button onClick={()=>{addComment()}}>댓글입력</button>
                </div>
            </div>
        </div>
    )
}

export default Modalcomment