import React from 'react'
import { Link } from "react-router-dom";
// peramerariesed funcional component
import {useCart} from "../context/Cart";
import {toast} from 'react-toastify'

const ProductCard = (props) => {
  const [cart,setCart] = useCart()
  return (
    <div className='col-lg-3 col-md-6'>
      <div className="card">
        <div>
          <img src={props.data?.productimage} width={100} className="" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title">
            {props.data?.title.substring(0, 30)}...
          </h5>
          <p className="card-text">
            {/* substring() use to define length */}
            {props.data?.description.substring(0, 30)}...
          </p>
          {/* use id to defferenciate productdetail */}
          <Link className="btn btn-primary rounded-3 shadow me-5" to="/productdetail/:id">Details</Link>
          <button className="btn btn-primary rounded-3 shadow" onClick={() =>{
          if(cart.some(i=>i._id===props?.data?._id)){
            toast.error('item already in cart')
            }
            else{
              const updateItem = {...props?.data,product_qty:1}
              setCart([...cart,updateItem])
              localStorage.setItem("cart",JSON.stringify([...cart,updateItem]))
              toast.success("item add to cart")
            }
            // setCart([...cart,props?.data])
            // toast.success('Item Added to cart')
          }}>Add to Cart</button> 
        </div>
      </div>
    </div>
  )
}

export default ProductCard