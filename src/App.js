import './App.css';
import Main from './pages/Main'
import Add from './pages/Add'
import Register from './pages/Register';
import Login from './pages/Login';
import Header from './pages/Header';
import {Route} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';
import {history} from './redux/store';
import {actionCreators as userActions} from './redux/user';
import {useDispatch} from 'react-redux';
import { useEffect } from 'react';
import {apiKey} from './firebase';

function App() {
  const dispatch = useDispatch();
  const session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(session_key)? true : false;
  useEffect(()=>{
    if(is_session){
      dispatch(userActions.loginCheckFB());
    }
  },[])
  return (
    <div className="App">
      <Header/>
        <ConnectedRouter history={history}>
        <Route path='/main' exact>
          <Main></Main>
        </Route>
        <Route path='/add-content'>
          <Add/>
        </Route>
        <Route path='/register' exact>
          <Register/>
        </Route>
        <Route path='/login' exact>
          <Login/>
        </Route>
        </ConnectedRouter>
    </div>
  );
}

export default App;
