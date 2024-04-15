import React from 'react'

const EditProduct = () => {
  return (
    <div className='container'>
      <h1 className="text-center">EditProduct</h1>
      <div className="card">
        <div className="card-body">
        <form className="row g-3 needs-validation" novalidate>
        <div className="col-md-3 fs-4">
          <label for="validationCustom05" className="form-label">id</label>
          <input type="text" className="form-control" id="validationCustom05" required />
          <div className="invalid-feedback">
            Please provide a valid id.
          </div>
        </div>
        <div class="col-md-4 fs-4">
          <label for="validationCustomUsername" class="form-label">quantity</label>
          <div class="input-group has-validation">
            <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
            <div class="invalid-feedback">
            </div>
          </div>
        </div>
        <div class="col-md-4 fs-4">
          <label for="validationCustomUsername" class="form-label">prize</label>
          <div class="input-group has-validation">
            <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
            <div class="invalid-feedback">
            </div>
          </div>
        </div>
        <div class="col-12">
          <button class="btn btn-primary" type="submit">Add</button>
        </div>
      </form>
        </div>
      </div>
    </div>
  )
}

export default EditProduct