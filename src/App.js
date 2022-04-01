import './App.css';
import Main from './pages/Main'
import Add from './pages/Add'
import Register from './pages/Register';
import Login from './pages/Login';
import Header from './pages/Header';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
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
    </div>
  );
}

export default App;
