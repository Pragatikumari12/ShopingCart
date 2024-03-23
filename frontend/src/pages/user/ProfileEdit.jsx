import React from 'react'

const ProfileEdit = () => {
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <h1 className='text-center'>ProfileEdite</h1>
          <div className="card round-5 border-0 shadow">
            <div className="card-body">
            <form>
              <div class="mb-3">
                  <label for="exampleInputName" class="form-label">Name</label>
                  <input type="name" class="form-control" id="exampleInputtName"/>
                </div>
                <div class="mb-3">
                  <label for="exampleInputMobileNumber" class="form-label">Mobile Number</label>
                  <input type="mobile" class="form-control" id="exampleInputMobileNumber"/>
                </div>
                <div class="mb-3">
                  <label for="exampleInputAddress" class="form-label">Address</label>
                  <input type="address" class="form-control" id="exampleInputAddress"/>
                </div>
                 <div class="mb-3">
                  <label for="exampleInputCity" class="form-label">City</label>
                  <input type="city" class="form-control" id="exampleInputCity"/>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPostalCode" class="form-label">Postal Code</label>
                  <input type="PostalCode" class="form-control" id="exampleInputPostalCode"/>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword" class="form-label">Password</label>
                  <input type="text" class="form-control" id="exampleInputPassword"/>
                </div>
                  <button type="change" class="btn btn-primary">Change</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileEdit