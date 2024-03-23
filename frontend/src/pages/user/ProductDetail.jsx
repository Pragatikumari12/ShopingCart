import React from 'react'

const ProductDetail = () => {
  return (
    <div>
      <p className="text-center fs-5 fw-bold">Product Detail</p>
      <div className="card">
        <div className="card-body">
          <div className="row p-3">
            <div className="col-lg-6 d-flex justify-content-center">
              <div>
                <div>
                  <img src="https://m.media-amazon.com/images/I/71z9qM84SKL.jpg" height={300} />
                </div>
                <div className='d-flex justify-content-center'>
                  <div class="btn-group mt-3" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-lg rounded-2 shadow-sm btn bg-warning px-2"><i class="fa-solid fa-cart-shopping"></i> Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div class="">
                <h6 class="mb-5">Nescafe Classic CoffeePowder, 100% Pure Instant Coffee  (190 g)</h6><hr />
                <h6 className='mb-3'>₹6000  <span className='text-success'>70%Off</span></h6>
                <p className="mb-3">M.R.P <strike className="text-dark">500</strike></p>
                <p className="mb-3">Bank Offer5% Cashback on Flipkart Axis Bank Card</p>
                <p className="mb-3"><i class="fa-solid fa-stopwatch"></i> Expiry Date 29 Jan 2026
                  Manufactured date 01 Jan 2024</p>
                  <h6 className="mb-3">Description</h6>
                  <p className="mb-3">NESCAFE, world�s favourite instant coffee brand, brings to you rich and aromatic coffee in the form of NESCAFE Classic Instant Coffee, that will take your coffee experiences to the next level. The unmistakable flavour of NESCAFE Classic is what makes this signature coffee so loved all over the world. Start your day right with the first sip of this 100% pure coffee and let the bold taste and rich aroma of NESCAFE Classic Instant Coffee awaken your senses to new opportunities.</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail

