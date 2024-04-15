import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useAuth } from '../../context/Auth';
import { toast } from 'react-toastify';

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" })
  const navigate = useNavigate()
  // auth= variable, setauth= function
  const [auth,setAuth] = useAuth()
  // const [loading,setLoading] = useState(false)
  const handelSubmit = async (e) => {
    e.preventDefault()
    console.log(user);
    try {
      const res = await axios.post("http://localhost:5000/login", user)
      console.log(res);
      if (res.status === 200) {
        setAuth({...auth,user:res.data.user,token:res.data.token})
        console.log(res.data.message, res.data.token, res.data.user);
        toast.success(res.data.message)
        setUser({ email: "", password: "" })
        localStorage.setItem('auth',JSON.stringify(res.data))
        navigate("/")
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    // we can only return a single child in return function 
    // we use <></> (fregment) to wrap our elements into single child
    // <> </> do not create extra node
    <div>
      <div className="row justify-content-center"><div className="col-lg-4">
        <h1 className='text-center'>Login</h1>
        <div className="card rounded-5 border-0 shadow">
          <div className="card-body">
            <form onSubmit={handelSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleFormControlInput2" placeholder="*********" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
              </div>
              <div className="mb-3 text-center">
                <button type='submit' className="btn shadow btn-secondary px-4">
                  Login
                </button>
              </div>
              <p>Donot have Account?<Link to="/singup">Singup</Link></p>
            </form>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Login
