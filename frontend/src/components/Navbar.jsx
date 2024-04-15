import React from 'react'
import { Link} from 'react-router-dom'
import { useAuth } from '../context/Auth'
import { useCart } from '../context/Cart'
const Navbar = () => {
    const [auth, setAuth] = useAuth()
    const [cart] = useCart();
    const handlelogout = () => {
        setAuth({ ...auth, user: null, token: "" })
        localStorage.removeItem("auth")
    }
    return (
        <div className="bg-primary shadow-lg mb-3 fixed-top">
            <div className='container'>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <div>
                            <Link to='/'><p className="fs-4 my-0 py-0 fw-bold text-light">ECOMMERCE</p></Link>
                            <p className="fs-6 my-0 py-0 text-light">Is your market</p>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className='w-50 mx-auto'>
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-light" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                                </form>
                            </div>
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                {auth?.token ? (<>
                                    <li className="nav-item">
                                        <Link className='btn btn-warning me-3 mt-1' to="dashboard">Dashboard</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link type='button' className='btn btn-warning mt-1' onClick={handlelogout} to='login'>Logout</Link>
                                    </li>
                                </>) : (<>
                                    <li className="nav-item">
                                        <Link className='btn btn-warning me-3 mt-1' to="login">Login</Link>
                                    </li>
                                </>)}

                                <li className="nav-item">
                                    <Link className='btn text-light fs-2 pt-0' to='/cart'>
                                        <i className="fa-solid fa-cart-shopping"></i>
                                        {cart?.length}
                                    </Link>
                                </li>


                            </ul>

                        </div>
                    </div>
                </nav>
                {/* <div className='d-flex justify-content-center'>
               <div class="dropdown">
                    <button class="btn btn-warning btn-sm mb-2 dropdown-toggle me-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Women
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Saree</a></li>
                        <li><a class="dropdown-item" href="#">Kurtti</a></li>
                        <li><a class="dropdown-item" href="#">Top</a></li>
                    </ul>
                </div>
                <div class="dropdown me-3">
                    <button class="btn btn-warning btn-sm mb-2 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Men
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Pant</a></li>
                        <li><a class="dropdown-item" href="#">Shirt</a></li>
                        <li><a class="dropdown-item" href="#">Informal</a></li>
                    </ul>
                </div>
                <div class="dropdown me-3">
                    <button class="btn btn-warning btn-sm mb-2 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Kids
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Frock</a></li>
                        <li><a class="dropdown-item" href="#">Format</a></li>
                        <li><a class="dropdown-item" href="#">Informal</a></li>
                    </ul>
                </div>
                <div class="dropdownmb me-3">
                    <button class="btn btn-warning btn-sm mb-2 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Food
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Sweet</a></li>
                        <li><a class="dropdown-item" href="#">Snackes</a></li>
                        <li><a class="dropdown-item" href="#">Grocerary</a></li>
                    </ul>
                </div>
               </div> */}
            </div>
        </div>
    )
}

export default Navbar


