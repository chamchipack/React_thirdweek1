import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCommentFB } from '../redux/comment';
import './main.css'

function Modalcomment(props){
    let [getText, setText] = useState();
    const dispatch = useDispatch();
    let getModal = props.getModal;
    let setModal = props.setModal;
    const text = useRef();

    const onChange = () => {
        setText(text.current.value)
    }
    const addComment = () => {
        console.log('dddddd')
        dispatch(addCommentFB(getText))
    }
    
    return(
        <div className="black-modal" >
            <div className="white-modal">
                <button className='close-btn' onClick={()=>setModal(!getModal)}>X</button>
                <div className='comment-box'>
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