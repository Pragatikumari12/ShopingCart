import React from 'react'
import {Link} from 'react-router-dom'

const UserDashboard = () => {
  return (
    <div>
      <h1 className="text-center">User Dashboard</h1>
      <div className="row">
        <div className="col-3">
          <div className='container'>
            <form className=''>
              <div class="mb-3">
                <button className='btn btn bg-secondary'>Order</button>
              </div>
              <div class="mb-3">
              <Link className='btn btn bg-secondary' to='/profile'>Edite Product</Link>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="">
          <div className="card ms-5">
            <div className="card-body">
              <p className='fw-bold fs-6'>PRAGATI KUMARI</p>
              <p className='fw-bold fs-6'>8102260546</p>
              <p className='fw-bold fs-6'>Pragati54@gmail.com</p>
              <p className='fw-bold fs-6'>B.S.City sec 2/c Jharkhand 827001</p>
              <p><i class="fa-solid fa-pen-to-square"></i></p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDashboard