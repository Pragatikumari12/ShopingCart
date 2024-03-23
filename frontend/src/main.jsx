import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';
function Main() {
  return (
    <>
    <ToastContainer style={{marginTop:70}} />
    <Navbar/>
    <div className="container">
    <Outlet/>
    </div>
    
    </>
  );
}

export default Main;
