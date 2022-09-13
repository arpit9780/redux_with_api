import './App.css';
import LogIn from './component/logIn';
import {Route,Routes} from 'react-router-dom'
import SignUp from './component/SignUp';
import Dashboard from './component/Dashboard';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import NavbarLog from './component/Navbarlog';


function App() {
  return (
    // <div className='bgwall'>
    <div className="App ">
      <NavbarLog/>
    <ToastContainer/>
      <Routes>
        <Route path='/' element={<SignUp/>}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </div>
    // </div>
      );
}

export default App;
