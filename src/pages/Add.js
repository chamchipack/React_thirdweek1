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
    const selectFile = (e) =>{
        console.log(e.target.files[0])
        console.log(fileInput.current.files[0])
        const reader = new FileReader();
        const file = fileInput.current.files[0];
        reader.readAsDataURL(file);

        reader.onloadend = () => {
            imageFile = reader.result;
            console.log(imageFile)
            setFiles(imageFile)
            dispatch(uploadImage(imageFile))
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
