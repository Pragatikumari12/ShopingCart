import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

const Singup = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" })
  const handelSubmit = async (e) => {
    // preventdefault is used to stop refresh the page on pressing submit button 
    e.preventDefault()
    try  {
      const res = await axios.post("http://localhost:5000/singup",user)
      console.log(res);
      if(res.status===201){
        console.log("user singup sucessfully");
        setUser({name: "", email: "", password: ""})
      } 
    } catch (error) {
      console.log(error);
    }
    // console.log(user);
  }
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <h1 className='text-center'>Singup</h1>
          <div className='card rounded-5 border-0 shadow'>
            <div className='card-body'>
              <form onSubmit={handelSubmit}>
                <div className="mb-3">
                  <label className="form-label">Enter Name</label>
                  <input type="text" className="form-control" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input type="email" className="form-control" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                </div>
                <button type="submit" className="btn btn-secondary">Submit</button>
                <p>Have Account?<Link to="/login">Login</Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Singup

