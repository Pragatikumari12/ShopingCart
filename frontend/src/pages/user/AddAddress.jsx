import React from 'react'

const AddAddress = () => {
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-lg-6">
          
          <h1 className='text-center'>Address</h1>
          <div className="card round-5 border-0 shadow">
            <div className="card-body">
            <input class="form-control form-control-lg" type="text" placeholder="Full Name" aria-label=".form-control-lg example"/>
            <input class="form-control form-control-lg" type="text" placeholder="Phono" aria-label=".form-control-lg example"/>
            <input class="form-control form-control-sm" type="text" placeholder="PicCode" aria-label=".form-control-sm example"/>
            <input class="form-control form-control-lg" type="text" placeholder="State" aria-label=".form-control-lg example"/>
            <input class="form-control form-control-lg" type="text" placeholder="City" aria-label=".form-control-lg example"/>
            <input class="form-control" type="text" placeholder="House No., Building Name" aria-label="default input example"/>
            <input class="form-control form-control-sm" type="text" placeholder="Road Name, Area, Colony" aria-label=".form-control-sm example"/>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AddAddress