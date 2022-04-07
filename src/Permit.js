import {apiKey} from './firebase';
import { useSelector } from 'react-redux'

function Permit(props){
    const user_info  = useSelector((state) => state.user.user);

    const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
    const is_login = sessionStorage.getItem(_session_key);

    console.log(props.children)

    if(is_login && user_info){
        return <>{props.children}</>
    }
    return null;
}

export default Permit;