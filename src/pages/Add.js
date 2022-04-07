import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import {addPostFB} from '../redux/post';
import { getStorage, ref } from "firebase/storage";
import { uploadImage } from "../redux/post";

function Add(){
    const storage = getStorage();
    const dispatch = useDispatch();
    const fileInput = useRef();
    const text = useRef();
    const [getFiles, setFiles] = useState();
    const [getText, setText] = useState();

    
    const is_login = useSelector((state)=> state.user.is_login)
    const things = useSelector((state)=>state)
    let imageFile = ''
    const selectFile = (e) =>{ // 로컬파일 업로드하기 함수
        const reader = new FileReader(); // 내장함수(?)
        const file = fileInput.current.files[0];
        reader.readAsDataURL(file); // 로컬파일 url로 변환

        reader.onloadend = () => {
            imageFile = reader.result; // 결과값을 변수에 담아주고
            setFiles(imageFile) // state에 담아서
            dispatch(uploadImage(imageFile)) // 미들웨어로 보내주기
        }
    }
    

    const onChange = () => {
        setText(text.current.value)
    }

    const addPost = () =>{
        console.log(getFiles)
        dispatch(addPostFB(getFiles, getText))
    }
    return(
        <>
        <div className="add-background">
            <div>
                <h3>게시글 작성</h3>
            </div>
            <div className="file-input">
                <input type="file" onChange={selectFile} ref={fileInput}/>
            </div>
            <div className="text-area">
                <textarea onChange={onChange} ref={text}></textarea>
            </div>
            <button className="add-btn" onClick={()=>{addPost()}}>제출하기</button>
        </div>
        </>
    )
}
export default Add
