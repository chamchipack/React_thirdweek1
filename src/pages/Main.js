import react from 'react';
import './main.css'
import {Link} from 'react-router-dom'

function Main(){
    return(
        <>
            <div className='content-ground'>
                <div className='content-box'></div>
            </div>
            <Link to='/add-content'><div className='add-circle'></div></Link>
        </>
    )
}
export default Main