import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const { id } = useParams()
  const [productDetail, setProductDetail] = useState({})
  const fetchproductDetail = async () => {
    const { data } = await axios.get(`http://localhost:5000/showproduct/${id}`)
    setProductDetail(data)
    
  }
  useEffect(() => {
    fetchproductDetail()
  }, [])
  console.log(productDetail);
  return (
    <div>
      <p className="text-center fs-1 fw-bold">Product Detail</p>
      <div className="card">
        <div className="card-body">
          <div className="row p-3">
            <div className="col-lg-6 d-flex justify-content-center">
              <div>
                <div>
                  <img src={productDetail?.productimage} height={300} />
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
                <h2 className='mb-3'>{productDetail?.productname}</h2>
                <h6 class="mb-5">{productDetail?.brandname}</h6><hr />
                <h6 className='mb-3'>₹{productDetail?.prize}  <span className='text-success'>70%Off</span></h6>
                <p className="mb-3">M.R.P <strike className="text-dark">500</strike></p>
                <p className="mb-3">{productDetail?.title}</p>
                <p className="mb-3"><i class="fa-solid fa-stopwatch"></i> Expiry Date 29 Jan 2026
                  Manufactured date 01 Jan 2024</p>
                <h6 className="mb-3">Description</h6>
                <p className="mb-3">{productDetail?.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail

