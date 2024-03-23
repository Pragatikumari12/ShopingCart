import React from 'react'

const UserDashboard = () => {
  return (
    <div>
      <h1 className="text-center">Admin Dashboard</h1>
      <div className="row">
        <div className="col-3">
          <div className='container'>
            <form className=''>
              <div class="mb-3">
                <button className='btn btn bg-secondary'> AllOrder</button>
              </div>
              <div class="mb-3">
              <button className='btn btn bg-secondary'>All User</button>
              </div>
              <div class="mb-3">
              <button className='btn btn bg-secondary'>All Product</button>
              </div>
              <div class="mb-3">
              <button className='btn btn bg-secondary'>All Category</button>
              </div>
              <div class="mb-3">
              <button className='btn btn bg-secondary'>Add Product</button>
              </div>
              <div class="mb-3">
              <button className='btn btn bg-secondary'>Add Category</button>
              </div>
              <div class="mb-3">
              <button className='btn btn bg-secondary'>Edite Product</button>
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
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDashboard