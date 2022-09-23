import './App.css';
import {Route,Routes} from 'react-router-dom'
import SignUp from './component/SignUp';
import Dashboard from './component/Dashboard';
import NavbarLog from './component/Header';
import Login from './component/Login';
import { PrivateRoute } from './PrivateRoute/PrivateRout';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div className='bgwall'>
    <div className="App ">
      <NavbarLog/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
      </Routes>
      <ToastContainer/>
    </div>
    </div>
      );
}

export default App;
